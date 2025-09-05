const Project = require('../models/Project');

/**
 * GET /api/projects
 * supports optional query params:
 *   ?city=Dubai
 *   ?search=neva
 *   ?page=1&limit=12
 */
exports.listProjects = async (req, res) => {
  try {
    const { city, search, page = 1, limit = 20 } = req.query;
    const q = {};
    if (city) q.city = city;
    if (search) q.title = { $regex: search, $options: 'i' };

    const skip = (Number(page) - 1) * Number(limit);
    const [projects, total] = await Promise.all([
      Project.find(q).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Project.countDocuments(q)
    ]);

    res.json({ projects, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProject = async (req, res) => {
  try {
    const proj = await Project.findById(req.params.id);
    if (!proj) return res.status(404).json({ message: 'Project not found' });
    res.json(proj);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// simple create/update/delete for admin usage (no auth implemented by default)
exports.createProject = async (req, res) => {
  try {
    const data = req.body;
    const p = await Project.create(data);
    res.status(201).json(p);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const p = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!p) return res.status(404).json({ message: 'Project not found' });
    res.json(p);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const p = await Project.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
