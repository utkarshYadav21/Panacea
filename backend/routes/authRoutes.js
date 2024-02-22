const { Router } = require("express");
const authControllers = require("../controllers/authController");
const router = Router();

router.post("/register", authControllers.register_post);
router.post("/login", authControllers.login_post);

module.exports=router;

