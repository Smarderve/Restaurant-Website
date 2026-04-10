const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware: teaches Express how to read JSON request bodies
app.use(express.json());

//Routes
const contactRoute = require('./routes/Contact');
app.use('/api/contact', contactRoute);

//"Base Route": GET /
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Restaurant API Is Running'
    });
});

//Connect to MongoDB then Start Server

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`Server Running on http;//localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB Connection failed...', error.message);
    });