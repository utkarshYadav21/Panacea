const {Router}=require('express');
const { contact_post, Request_post, service_post, status_get } = require('../controllers/adminController');
const router=Router();
const verifyToken=require('../middlewares/verifyToken');

router.post('/contactUs',contact_post);
router.post('/requestOrder',verifyToken,Request_post);
router.post('/service',service_post);
router.post('/status',verifyToken,status_get);

module.exports=router;