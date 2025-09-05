require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const projectsRouter = require('./routes/projects');

const app = express();
connectDB();

app.use(express.json({ limit: '5mb' }));
app.use(morgan('dev'));
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/projects', projectsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
