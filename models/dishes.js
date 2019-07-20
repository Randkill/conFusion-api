const mongoose = require('mongoose')
const Schemaa = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);    //loading new currency type to mongoose
const Currency = mongoose.Types.Currency;

const commentSchema = new Schemaa({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const dishSchema = new Schemaa({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },image: {
        type: String,
        required: true
    },category: {
        type: String,
        require: true
    },label: {
        type: String,
        default: ''
    },price: {
        type: Currency,
        required: true,
        min: 0
    },featured: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
},{
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;