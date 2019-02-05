const mongoose = require("mongoose");

const { Schema } = mongoose;

const PartnerSchema = new Schema({
  address: {
    latitude: String,
    longitude: String,
    address: String,
    city: String
  },
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

module.exports = Partner = mongoose.model("user", PartnerSchema);
