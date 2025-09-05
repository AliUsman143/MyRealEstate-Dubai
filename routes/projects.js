const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/projectController');

// public
router.get('/', ctrl.listProjects);
router.get('/:id', ctrl.getProject);

// admin (no auth by default; add middleware/auth later)
router.post('/', ctrl.createProject);
router.put('/:id', ctrl.updateProject);
router.delete('/:id', ctrl.deleteProject);

module.exports = router;
