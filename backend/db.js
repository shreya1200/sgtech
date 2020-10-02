// config is database name

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/priyam', (err) => 
{
    if(err){
        console.log("error" + JSON.stringify(err));}
    else{
        console.log("successfully connected");
    }
});

module.exports = mongoose;