require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({ limit: '5mb' }));
app.use(morgan('dev'));
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));

app.get('/api/health', (req, res) => res.json({ ok: true }));

// app.use("/api/project-details", require("./routes/projectDetailRoutes"));
// app.use("/api/appartments", require("./routes/appartmentsRoute"));
app.use("/api/project-details", require("./routes/projectDetails"));

app.use('/api/projects', require('./routes/projects'));
app.use("/api/properties", require("./routes/propertyDetailRoutes"));
app.use("/api/agencies", require("./routes/agencyRoutes"));
app.use("/api/partners", require("./routes/partners"));
app.use("/api/agents", require("./routes/agents"));
app.use("/api/developers", require("./routes/developers"));
app.use("/api/city-profiles", require("./routes/cityProfiles"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
