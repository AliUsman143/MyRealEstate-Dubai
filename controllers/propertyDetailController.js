const PropertyDetail = require("../models/PropertyDetail");

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await PropertyDetail.find().populate('developer').populate('validatedInfo.developer');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await PropertyDetail.findById(req.params.id).populate('developer').populate('validatedInfo.developer');
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new property
exports.createProperty = async (req, res) => {
  try {
    const property = new PropertyDetail(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update property
exports.updateProperty = async (req, res) => {
  try {
    const property = await PropertyDetail.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json(property);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete property
exports.deleteProperty = async (req, res) => {
  try {
    const property = await PropertyDetail.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
