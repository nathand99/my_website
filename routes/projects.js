// projects.js - projects route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.render('projects', { name: "projects", title: 'My Projects' });
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

// Home page route.
router.get('/my_website', function (req, res) {
  res.render('my_website', { name: "projects", title: 'my_website' });
})

module.exports = router;
