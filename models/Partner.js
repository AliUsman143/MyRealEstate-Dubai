const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    properties: { type: Number, required: true }, // "2,457" ko int me store karna best hai
    logo: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Partner", partnerSchema);
