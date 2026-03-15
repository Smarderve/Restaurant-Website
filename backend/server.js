const express = require('express');
const app = express();
const PORT = 3000;

//Middleware: teaches Express how to read JSON request bodies
app.use(express.json());

//Route 1: GET /
app.get('/', (req, res) => {
    res.send('Restaurant API Is Running');
});

//Route 2: GET /api/menu
app.get('/api/menu', (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, name: 'Eggs Benedict', price: 12.500, category: 'breakfast'},
            { id: 2, name: 'Grilled Ribeye', price: 17.500, category: 'dinner'},
            { id: 3, name: 'Eggs Benedict', price: 19.500, category: 'lunch'}
        ]
    });
});

//Route 3: POST /api/contact
app.get('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    //Validation: check required fields
    if(!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Name, Wmail, Message are all required Before submition'
        });
    }

    console.log('New Contact Message: ');
    console.log({ name, email, message });

    res.status(201).json({
        success: true,
        message: 'Message Received. We will get Back to you shortly. '
    });

});

//Start the Server
app.listen(PORT, () => {
    console.log('Server Running on http://localhost:${PORT}');
});