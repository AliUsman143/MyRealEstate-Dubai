const mongoose = require("mongoose");

const unitTypeSchema = new mongoose.Schema({
  name: String,
  sizeRange: String,
  priceRange: String,
  availability: String,
  bedrooms: String,
  bathrooms: String,
});

const paymentScheduleSchema = new mongoose.Schema({
  milestone: String,
  percentage: Number,
  description: String,
});

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const projectDetailSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  area: String,
  priceFrom: String,
  handover: String,
  image: String,
  city: String,
  developer: String,
  propertyType: String,
  progress: Number,
  paymentPlan: String,
  description: String,
  gallery: [String],
  unitTypes: [unitTypeSchema],
  paymentSchedule: [paymentScheduleSchema],
  faqs: [faqSchema],
});

module.exports = mongoose.model("ProjectDetail", projectDetailSchema);
