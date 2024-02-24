const mongoose=require('mongoose');

const serviceSchema=mongoose.Schema({
    typeOfService:{ type: String, required: true },
    email:{ type: String, required: true },
    name:{ type: String, required: true }
});

const Service=mongoose.model('services',serviceSchema);

module.exports=Service;