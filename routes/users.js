var express = require('express');
var router = express.Router();

var dbCon = require('../module/db/con');
var db=require('../module/db/bdModule')
var auto_incriment=require('../module/db/autoIncriment');

var dotenv=require('dotenv').config();

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  //res.clearCookie("userID");
  await dbCon.connectDB()
  const city= await db.city.find({})
  await dbCon.closeDB();
  var allredylogin=req.cookies.userID
  res.render('user/user',{YOUR_API_KEY: process.env.API_KEY,city:city,allredylogin:allredylogin})
  
});

module.exports = router;
