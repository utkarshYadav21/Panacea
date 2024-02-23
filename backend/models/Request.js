const mongoose=require('mongoose');

const RequestSchema=mongoose.Schema({
    image:String,
    colorCode:String,
    name:String,
    email:String,
    description:String
});

const Request=mongoose.model('Request',RequestSchema);

module.exports=Request;