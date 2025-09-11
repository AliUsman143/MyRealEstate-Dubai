const CityProfile = require("../models/CityProfile");

// List all profiles
exports.listProfiles = async (req, res) => {
  try {
    const profiles = await CityProfile.find().sort({ createdAt: -1 });
    res.json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single profile
exports.getProfile = async (req, res) => {
  try {
    const profile = await CityProfile.findById(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create new profile
exports.createProfile = async (req, res) => {
  try {
    const newProfile = await CityProfile.create(req.body);
    res.status(201).json(newProfile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update profile
exports.updateProfile = async (req, res) => {
  try {
    const updated = await CityProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Profile not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete profile
exports.deleteProfile = async (req, res) => {
  try {
    const deleted = await CityProfile.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Profile not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
