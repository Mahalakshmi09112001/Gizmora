const { default: mongoose } = require('mongoose');

const orderSchema = mongoose.Schema({
    productDetails: {
        type: Array,
        default: []
    },
    email: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        default: ""
    },
    paymentDetails: {
        paymentId: {
            type: String,
            default: ""
        },
        payment_method_type: {
            type: [String],
            default: []
        },
        payment_status: {
            type: String,
            default: ""
        }
    },
    shipping_options: {
        type: [String],
        default: []
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    address: {
        fullName: { type: String, default: "" },
        phone: { type: String, default: "" },
        address: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        pincode: { type: String, default: "" }
    }
}, {
    timestamps: true
});

const orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel;
