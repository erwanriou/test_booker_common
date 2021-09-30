const mongoose = require("mongoose")
const { updateIfCurrentPlugin } = require("mongoose-update-if-current")

const { Schema } = mongoose

// Create Schema
const OfferSchema = new Schema({
  product_name: {
    type: String,
    required: true,
    index: true
  },
  discount_value: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// MANAGE MONGOOSE PLUGINS
OfferSchema.plugin(updateIfCurrentPlugin)

OfferSchema.statics.findByEvent = async event => {
  return await Offer.findOne({ _id: event._id, __v: event.__v - 1 })
}

module.exports = Offer = mongoose.model("offers", OfferSchema)
