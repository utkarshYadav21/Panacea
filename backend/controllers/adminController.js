const Request=require('../models/Request');
const Contact=require('../models/Contact');

module.exports.contact_post=async(req,res)=>{
    const {name,email,subject,message}=req.body;
    let contact=new Contact({name,email,subject,message});
    contact=await contact.save();
    res.send({contact});
}
module.exports.Request_post=async(req,res)=>{
    let {selectedColor,selectedImage,description,Name,Email,choiceOfService}=req.body;
    let status="Pending";
    let request=new Request({image:selectedImage,name:Name,email:Email,colorCode:selectedColor,description,choiceOfService,status});
    request=await request.save();
    console.log(request);
    res.send(request);
}
module.exports.service_post=async(req,res)=>{
    const {name,email,typeOfService}=req.body;
    let service=new Service({name,email,typeOfService});
    service=await service.save();
    console.log(service);
    res.send(service);
}
module.exports.status_get=async(req,res)=>{
    let {Email}=req.body;
    let request=await Request.find({email:Email});
    console.log(request)
    console.log(request[0].status)
    res.json(request[0].status);
}