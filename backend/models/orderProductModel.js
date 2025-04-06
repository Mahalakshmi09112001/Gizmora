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
        type: Array,
        default: []
    },
    totalAmount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// ✅ Prevent OverwriteModelError
const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);

module.exports = orderModel;
