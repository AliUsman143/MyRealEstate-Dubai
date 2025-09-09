const Agency = require("../models/Agency");

// GET /api/agencies
exports.listAgencies = async (req, res) => {
  try {
    const agencies = await Agency.find().sort({ createdAt: -1 });
    res.json(agencies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/agencies/:id
exports.getAgency = async (req, res) => {
  try {
    const agency = await Agency.findById(req.params.id);
    if (!agency) return res.status(404).json({ message: "Agency not found" });
    res.json(agency);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/agencies
exports.createAgency = async (req, res) => {
  try {
    const agency = await Agency.create(req.body);
    res.status(201).json(agency);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/agencies/:id
exports.updateAgency = async (req, res) => {
  try {
    const agency = await Agency.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!agency) return res.status(404).json({ message: "Agency not found" });
    res.json(agency);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/agencies/:id
exports.deleteAgency = async (req, res) => {
  try {
    const agency = await Agency.findByIdAndDelete(req.params.id);
    if (!agency) return res.status(404).json({ message: "Agency not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
