const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
} = require("../controllers/projectDetailController");

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);

module.exports = router;
