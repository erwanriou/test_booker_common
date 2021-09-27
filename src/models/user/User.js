const mongoose = require("mongoose")
const { updateIfCurrentPlugin } = require("mongoose-update-if-current")
const bcrypt = require("bcryptjs")

const { Schema } = mongoose
const number = Math.random().toString()

// Create Schema
const UserSchema = new Schema({
  authorities: {
    type: [String],
    default: "ROLE_USER",
    index: true
  },
  name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    sparse: true
  },
  passwordHash: {
    type: String,
    default: bcrypt.hashSync(number, 12)
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },
  lastConnectionDate: {
    type: Date,
    index: true
  },
  date: {
    type: Date,
    default: Date.now,
    index: true,
    sparse: true
  }
})

// MANAGE MONGOOSE PLUGINS
UserSchema.plugin(updateIfCurrentPlugin)

// MANAGE PASSWORD ENCRYPTION
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

UserSchema.virtual("password").set(function (value) {
  this.passwordHash = bcrypt.hashSync(value, 12)
})

UserSchema.statics.findByEvent = async event => {
  return await User.findOne({ _id: event._id, __v: event.__v - 1 })
}

UserSchema.options.toJSON = {
  transform(doc, ret) {
    delete ret.passwordHash
  }
}

module.exports = User = mongoose.model("users", UserSchema)
