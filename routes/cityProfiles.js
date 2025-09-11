const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/cityProfileController");

// Public routes
router.get("/", ctrl.listProfiles);
router.get("/:id", ctrl.getProfile);

// Admin routes
router.post("/", ctrl.createProfile);
router.put("/:id", ctrl.updateProfile);
router.delete("/:id", ctrl.deleteProfile);

module.exports = router;
