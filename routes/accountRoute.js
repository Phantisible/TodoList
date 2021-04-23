  
const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");


router.get("/register_account", accountController.registerAccount);
router.post("/create_account", accountController.createAccount);
router.post("/login_account", accountController.loginAccount);

module.exports = router;