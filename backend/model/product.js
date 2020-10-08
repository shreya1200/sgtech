//schema file for products
const mongoose = require('mongoose');

const schema = mongoose.Schema
const productSchema = new schema({
    productname: String,
    category: String,
    brand: String,
    image: String,
    extraImages: String,
    price: String,
    Details: String,
    keyfeatures: String
});

//exporting this schema along with collection
//here pr is my collection name change only pr if collection name different
//priyam is databse name
module.exports = mongoose.model('priyam',productSchema,'all')