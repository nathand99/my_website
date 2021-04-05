var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: "index", title: 'my_website' });
  // could do:
  // res.json() - send json
  // res.sendFile()
  //res.render()
});

module.exports = router;

//Route parameters are named URL segments used to capture values at specific positions in the URL. 
//The named segments are prefixed with a colon and then the name (e.g. /:your_parameter_name/
