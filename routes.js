const express = require("express");
const router = express.Router();
const usersController = require("./back/controllers/usersController");

router.post('/newUser', usersController.newUser);

router.post('/find', usersController.createPdf)

module.exports = router;