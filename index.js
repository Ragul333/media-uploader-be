const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const mediaRoutes = require('./routes/fileRoute')

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/app',mediaRoutes);

const PORT = 5000 || process.env.PORT;

mongoose.connect(process.env.CONNECTION_URI).then(() => app.listen(PORT, () => console.log(`PORT is running on ${PORT}`))).catch((error) => console.log(error.message))
