const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    role: { type: String, required: true },
    properties: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", agentSchema);
