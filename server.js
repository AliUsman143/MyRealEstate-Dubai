require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const projectsRouter = require('./routes/projects');
const projectDetailRoutes = require("./routes/projectDetailRoutes");
const app = express();
connectDB();

app.use(express.json({ limit: '5mb' }));
app.use(morgan('dev'));
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/projects', projectsRouter);
app.use("/api/project-details", projectDetailRoutes);
app.use("/api/appartments", require("./routes/appartmentsRoute"));
app.use("/api/properties", require("./routes/propertyDetailRoutes"));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
