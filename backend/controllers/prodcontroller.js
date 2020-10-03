//file to implement rest api

const express = require('express');
const router = express.Router();
const mongoose = require('../db.js');
var ObjectId = require('mongoose').Types.ObjectId;
//importing employee model
var product = require('../model/product.js');


//to get all product details
//http://localhost:3000/
router.get('/', (req,res) =>
{
    //res.send('api works');
    product.find({}).exec(function(err,doc){
        if(err)
        {
            console.log("error: "+JSON.stringify(err));
        }
        else{
            res.json(doc);
        }
    })
});

//get product detail with specific id
//http://localhost:3000/_id
router.get('/:id', (req, res) =>
{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No product with that id found');

        product.findById(req.params.id, (err, doc) =>{
        if(!err)
        {res.send(doc);}
        else
        console.log('error in getting details' + JSON.stringify(err));
    
    });

});

//get product detail with specific category
//http://localhost:3000/products/category/brand

router.get('/products/:category/:brand', (req, res) =>{
    var category = req.params.category;
    var brand = req.params.brand;
    product.find({category : category, brand:brand}).exec(function(err,doc){
        if(err)
        {
            console.log("error: "+JSON.stringify(err));
        }
        else{
                res.json(doc);
        }
    });
});

// router.get('*', (req, res) =>
// {
//     return res.status(400).send('Error 404 Page not found!');
// });



//exporting routes
module.exports = router;