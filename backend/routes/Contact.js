const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

//POST /api/contact

router.post('/', async (req, res) => {
    
    try {
        const {name, email, message} = req.body;

        //Vallidation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Name, Email And Message Are Required!'
            });
        }

        //Save to Database
        const newContact = await Contact.create({ name, email, message });

        res.status(201).json({
            success: true,
            message: 'Message Received, We will get back to you soon..',
            data: newContact
        });

    } catch (error) {
        
        res.status(500).json({
            success: false,
            error: 'Server Error!.. Message Not Sent..'
        });

    }
    
});

// GET /api/contact (Admin Use Purpose To see all messages)

router.get('/', async (req, res) => {

    try{

        const messages = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: message.length,
            data: messages
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: 'Server Error... Could not retrieve messages'
        });

    }

});

module.exports = router;