const mongoose = require('mongoose')
const subCategorySchema =new mongoose.Schema({
    name: { 
        type: String,
        default: ""
    },
    image :{
        type: String,
        default: ""
    },
    category: [
        {
            type: mongoose.Schema.ObjectId, 
            ref: "category",
        }
    ]
},{
    timestamps: true
})

const subCategory = mongoose.model("subcategory" , subCategorySchema)

module.exports = subCategory;