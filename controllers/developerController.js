const Developer = require("../models/Developer");

// Get all developers
exports.listDevelopers = async (req, res) => {
  try {
    const developers = await Developer.find().sort({ createdAt: -1 });
    res.json(developers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single developer
exports.getDeveloper = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) return res.status(404).json({ message: "Developer not found" });
    res.json(developer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create developer
exports.createDeveloper = async (req, res) => {
  try {
    const data = req.body;
    const dev = await Developer.create(data);
    res.status(201).json(dev);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Bulk insert developers
exports.bulkInsert = async (req, res) => {
  try {
    const devs = await Developer.insertMany(req.body);
    res.status(201).json(devs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Bulk insert failed" });
  }
};

// Update developer
exports.updateDeveloper = async (req, res) => {
  try {
    const dev = await Developer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dev) return res.status(404).json({ message: "Developer not found" });
    res.json(dev);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete developer
exports.deleteDeveloper = async (req, res) => {
  try {
    const dev = await Developer.findByIdAndDelete(req.params.id);
    if (!dev) return res.status(404).json({ message: "Developer not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
