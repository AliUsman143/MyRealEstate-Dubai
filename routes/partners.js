const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");

// CRUD routes
router.get("/", partnerController.listPartners);
router.get("/:id", partnerController.getPartner);
router.post("/", partnerController.createPartner);
router.post("/bulk", partnerController.bulkInsert);
router.put("/:id", partnerController.updatePartner);
router.delete("/:id", partnerController.deletePartner);

module.exports = router;
