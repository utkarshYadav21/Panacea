const { Router } = require("express");
const verifyController = require("../controllers/verifyController");
const router = Router();

router.get("/verifyToken",verifyController.verify_get);

module.exports=router;