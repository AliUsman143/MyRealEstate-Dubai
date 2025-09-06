const express = require("express");
const router = express.Router();
const {
  createAppartment,
  getAllAppartments,
  getAppartmentById,
  getAppartmentsByState,
} = require("../controllers/appartmentController");

router.post("/", createAppartment);
router.get("/", getAllAppartments);
router.get("/:id", getAppartmentById);
router.get("/state/:state", getAppartmentsByState);

module.exports = router;
