const mongoose = require("mongoose");

const PropertyDetailSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  beds: { type: Number, required: true },
  baths: { type: Number, required: true },
  sqft: { type: Number, required: true },
  images: [String],
  videos: [String],
  propertyType: String,
  state: String,
  tags: [String],
  developer: {type: mongoose.Schema.Types.ObjectId, ref: 'Developer'},
  isOffPlan: Boolean,
  paymentPlan: String,
  whatsappLink: String,
  emailLink: String,
  refNumber: String,
  postedDate: String,
  description: String,

  propertyInfo: {
    type: { type: String },
    purpose: String,
    refNo: String,
    completion: String,
    furnishing: String,
    truCheck: String,
    avgRent: String,
    addedOn: String
  },

  validatedInfo: {
    developer: {type: mongoose.Schema.Types.ObjectId, ref: 'Developer'},
    ownership: String,
    buildUpArea: String,
    usage: String,
    parking: String
  },

  buildingInfo: {
    name: String,
    year: String,
    floors: String,
    retailCentres: String,
    pools: String,
    parking: String,
    area: String,
    elevators: String
  },

  amenities: [String],

  similarTransactions: [
    {
      date: String,
      location: String,
      area: String,
      price: String
    }
  ],

  regulatoryInfo: {
    permitNo: String,
    zone: String,
    agency: String,
    ded: String,
    rera: String,
    brn: String
  },

  coordinates: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model("PropertyDetail", PropertyDetailSchema);
