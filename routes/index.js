var express = require('express');
var router = express.Router();
var dotenv=require('dotenv').config();

//console.log(process.env.PORT)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,Port:process.env.PORT});
});

module.exports = router;
