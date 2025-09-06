const mongoose = require("mongoose");

const appartmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true },
    price: { type: String, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    sqft: { type: Number, required: true },
    images: { type: [String], required: true },
    propertyType: { type: String, required: true },
    tags: { type: [String], required: true },
    developer: { type: String, required: true },
    isOffPlan: { type: Boolean, required: true },
    paymentPlan: { type: String, required: false },
    whatsappLink: { type: String, required: true },
    emailLink: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appartment", appartmentSchema);
