const {Router}=require('express');
const { contact_post, Request_post, service_post } = require('../controllers/adminController');
const router=Router();

router.post('/contactUs',contact_post);
router.post('/requestOrder',Request_post);
router.post('/service',service_post);

module.exports=router;