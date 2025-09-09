const express = require("express");
const router = express.Router();
const agencyController = require("../controllers/agencyController");

router.get("/", agencyController.listAgencies);
router.get("/:id", agencyController.getAgency);
router.post("/", agencyController.createAgency);
router.put("/:id", agencyController.updateAgency);
router.delete("/:id", agencyController.deleteAgency);

module.exports = router;
