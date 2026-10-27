
var express = require('express');
var router = express.Router();

/* GET computation endpoint. */
router.get('/', function(req, res) {

  // Generate a random value
  var x = Math.random() * 100;

  // Check for query argument x
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  if (!Number.isFinite(x)) {
    return res.status(400).send('Invalid x value');
  }

  // Apply the Math function
  var y = Math.round(x);

  // Construct the response
  var response = `Math.round applied to ${x} is ${y}`;

  // Send the response
  res.send(response);
});

module.exports = router;
