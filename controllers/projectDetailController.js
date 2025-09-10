const ProjectDetail = require("../models/ProjectDetail");

// Get all projects (with developer populated + city filter)
exports.listProjects = async (req, res) => {
  try {
    const { city } = req.query;

    // Base query
    let query = {};

    if (city) {
      query.city = { $regex: new RegExp(city, "i") }; // case-insensitive search
    }

    const projects = await ProjectDetail.find(query).populate("developer");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// Get project by ID
exports.getProject = async (req, res) => {
  try {
    const project = await ProjectDetail.findById(req.params.id).populate("developer");
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create new project
exports.createProject = async (req, res) => {
  try {
    const project = await ProjectDetail.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  try {
    const project = await ProjectDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const project = await ProjectDetail.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
