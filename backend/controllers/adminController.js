const Request=require('../models/Request');
const Contact=require('../models/Contact');
const Service=require("../models/Service");

module.exports.contact_post=async(req,res)=>{
    const {name,email,subject,message}=req.body;
    let contact=new Contact({name,email,subject,message});
    contact=await contact.save();
    res.send({contact});
}
module.exports.Request_post=async(req,res)=>{
    const {image,name,email,colorCode,description}=req.body;
    let request=new Request({image,name,email,colorCode,description});
    request=await request.save();
    console.log(request);
    res.send({request});
}
module.exports.service_post=async(req,res)=>{
    const {name,email,typeOfService}=req.body;
    let service=new Service({name,email,typeOfService});
    service=await service.save();
    console.log(service);
    res.send(service);
}