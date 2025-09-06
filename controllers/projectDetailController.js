const ProjectDetail = require("../models/ProjectDetail");

// @desc    Get all project details
exports.getProjects = async (req, res) => {
  try {
    const projects = await ProjectDetail.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get single project detail by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await ProjectDetail.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create new project detail
exports.createProject = async (req, res) => {
  try {
    const newProject = new ProjectDetail(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
};
