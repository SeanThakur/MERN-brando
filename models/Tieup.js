const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newTieupSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'companies'
    },
    companyName: {
        type: String,
        required: true
    },
    companyType: {
        type: String,
        default: 'Private'
    },
    discription: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
    },
    productCount: {
        type: Number,
        default: 0
    },
    product: [
        {
            name: {
                type: String
            },
            discription:{
                type: String
            },
            price: {
                type: Number
            },
            images: {
                type: Array,
                default: []
            },
            Date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Tieup = mongoose.model("tieupcompanies", newTieupSchema);

