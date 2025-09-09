const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

// CRUD routes
router.get("/", agentController.listAgents);
router.get("/:id", agentController.getAgent);
router.post("/", agentController.createAgent);
router.post("/bulk", agentController.bulkInsert);
router.put("/:id", agentController.updateAgent);
router.delete("/:id", agentController.deleteAgent);

module.exports = router;
