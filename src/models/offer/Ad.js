const mongoose = require("mongoose")
const { updateIfCurrentPlugin } = require("mongoose-update-if-current")

const { Schema } = mongoose

// Create Schema
const AdSchema = new Schema({
  _offers: [
    {
      _offer: {
        type: Schema.Types.ObjectId,
        ref: "offers",
        index: true
      }
    }
  ],
  title: {
    type: String,
    required: true,
    index: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// MANAGE MONGOOSE PLUGINS
AdSchema.plugin(updateIfCurrentPlugin)

AdSchema.statics.findByEvent = async event => {
  return await User.findOne({ _id: event._id, __v: event.__v - 1 })
}

module.exports = User = mongoose.model("ads", AdSchema)
