const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: [true, 'Name Is Required'],
        trim: true
    },

    items: {
        type: Array,
        required: [true, 'items Ordered Are Required'],
        trim: true
    },

    price: {
        type: Number,
        required: [true, 'Total Price Is Required'],
        trim: true
    },

    status: {
        type: String,
        default: "pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('order', orderSchema);