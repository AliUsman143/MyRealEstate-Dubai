// seed/seedProjects.js
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Project = require('../models/Project');
const projects = require('../data/projects.json'); // ensure valid JSON

const seed = async () => {
  try {
    await connectDB();
    console.log('Clearing projects collection...');
    await Project.deleteMany({});
    console.log('Seeding projects...');
    await Project.insertMany(projects);
    console.log('Seeding finished.');
    process.exit(0);
  } catch (err) {
    console.error('Seed error', err);
    process.exit(1);
  }
};

seed();
