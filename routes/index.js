var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/usersdata', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({name:"Mukesh",
email:"xyz@gmail.com"})
});

module.exports = router;
