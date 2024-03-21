var express = require('express');
var router = express.Router();
 
/* Computation end point */
router.get('/', function(req, res, next) {
   const randomNumber = Math.floor(Math.random() * 100) + 1;
  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;
  res.send(`Math.atan() applied to ${x} is ${Math.atan(x)}<br> Math.exp() applied to ${x} is ${Math.exp(x)}<br> Math.expm1() applied to ${x} is ${Math.expm1(x)}`);
});
 
module.exports = router;