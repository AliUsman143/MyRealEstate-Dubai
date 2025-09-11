const mongoose = require("mongoose");

const cityProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    experience: { type: String, required: true },
    specialization: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CityProfile", cityProfileSchema);
