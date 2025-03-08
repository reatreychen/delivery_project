const mongoose = require('mongoose')
const orderSchema =new mongoose.Schema({
    userId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    orderId : {
        type: String,
        required: true,
        unique: true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref:"product"
    },
    product_details : {
        name : String,
        image :Array,
    },
    paymentId : {
        type: String,
        default: ""
    },
    payment_status : {
        type: String,
        default: ""
    },
    delivery_address : {
        type : mongoose.Schema.ObjectId,
        ref : "address"
    },
    subTotalAmt : {
        type: Number,
        default: 0
    },
    invoice_receipt : {
        type: String,
        default: ""
    }
},{
    timestamps: true
})

const orderModel = mongoose.model("order" , orderSchema)

module.exports = orderModel