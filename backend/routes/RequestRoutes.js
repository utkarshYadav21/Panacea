const {Router}=require('express');
const { contact_post, Request_post } = require('../controllers/requestController');
const router=Router();

router.post('/contactUs',contact_post);
router.post('/requestOrder',Request_post);

module.exports=router;