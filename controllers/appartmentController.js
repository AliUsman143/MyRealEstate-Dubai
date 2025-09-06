const Appartment = require("../models/Appartment");
const Project = require("../models/Project");

// Create a new appartment
exports.createAppartment = async (req, res) => {
  try {
    const appartment = new Appartment(req.body);
    await appartment.save();
    res.status(201).json(appartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all appartments
exports.getAllAppartments = async (req, res) => {
  try {
    const appartments = await Appartment.find();
    res.status(200).json(appartments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single appartment by ID
exports.getAppartmentById = async (req, res) => {
  try {
    const appartment = await Appartment.findById(req.params.id);
    if (!appartment) {
        return res.status(404).json({ error: "Appartment not found" });
    }
    res.status(200).json(appartment);
  }
    catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// appartment by state
exports.getAppartmentsByState = async (req, res) => {
  try {
    const state = req.params.state;
    const appartments = await Appartment.find({ state: state });
    res.status(200).json(appartments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};