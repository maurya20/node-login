var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/products', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json([{id:1,name:"Bajaj immerson Rod",img:"https://images-na.ssl-images-amazon.com/images/I/81KdpwazROL._SL1500_.jpg",partnumber:"IMRBJ1500",description:"Now you don’t need to brave the cold water in the winters to take a bath if you have this immersion rod from Bajaj at your disposal.",seller:"AB Group",stock:46000},
  {id:2,name:"TRIAK",img:"https://4.imimg.com/data4/QQ/OW/GLADMIN-179588/triac-500x500.jpg",partnumber:"TRIAK3PCH",description:"VDRM: 600V IT(AV): 4A Case: T0220 Commonly used in: Light dimmers, Washing machines, Motor control, Hand tools etc. Gate trigger current:6-15mA (VAK=12V ,RL=100ohm)",seller:"GM inc",stock:67890},
  {id:3,name:"ACCL",img:"https://images-na.ssl-images-amazon.com/images/I/61MGKtHfvyL._SL1000_.jpg",partnumber:"ACCL1PHLT",description:"Elmeasure 32A 1Ph ACCL (Automatic Phase Changeover with Current Limiter) White Colour with Display",seller:"Larcen&Tubro",stock:2316433},
  ])
});

module.exports = router;
