const mongoose = require('mongoose');

const { nanoid } = require('nanoid'); // install karo: npm i nanoid

const projectSchema = new mongoose.Schema({
  id: { type: String, default: () => nanoid(), unique: true }, // auto-generate id
  title: { type: String, required: true },
  location: { type: String },
  area: { type: String },
  priceFrom: { type: String },
  handover: { type: String },
  image: { type: String },
  city: { type: String },
  whatsappLink: { type: String },
}, { timestamps: true });


module.exports = mongoose.model('Project', projectSchema);
