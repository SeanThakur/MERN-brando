const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyModel = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
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
        required: true
    },
    since: {
        type: Date,
        default: Date.now
    },
    images: {
        type: Array,
        default: [],
    },
    locatedAt: {
        type: [String]
    },
    productCount: {
        type: Number,
        default: 0
    },
    social: {
        youtube: {
            type: String,
            default: "none"
        },
        facebook: {
            type: String,
            default: "none"
        },
        instagram: {
            type: String,
            default: "none"
        },
        linkedin: {
            type: String,
            default: "none"
        },
        twitter: {
            type: String,
            default: "none"
        }
    },
    product: [
        {
            name: {
                type: String,
                required: true
            },
            discription:{
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            images: {
                type: Array,
                default: []
            },
            launchingDate: {
                type: Date,
                default: ''
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

module.exports = Company = mongoose.model('companies', companyModel);