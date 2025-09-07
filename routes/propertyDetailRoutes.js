const express = require("express");
const router = express.Router();
const propertyDetailController = require("../controllers/propertyDetailController");

// CRUD Routes
router.get("/", propertyDetailController.getAllProperties);
router.get("/:id", propertyDetailController.getPropertyById);
router.post("/", propertyDetailController.createProperty);
router.put("/:id", propertyDetailController.updateProperty);
router.delete("/:id", propertyDetailController.deleteProperty);

module.exports = router;
