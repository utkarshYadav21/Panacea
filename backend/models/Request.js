const mongoose=require('mongoose');

const RequestSchema=mongoose.Schema({
    image:{ type: String, required: true },
    colorCode:{ type: String, required: true },
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    description:String
});

const Request=mongoose.model('Request',RequestSchema);

module.exports=Request;