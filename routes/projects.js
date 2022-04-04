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

// my_website
router.get('/my_website', function (req, res) {
  res.render('my_website', { name: "projects", title: 'my_website' });
})

// rdr
router.get('/rdrforexplainableai', function (req, res) {
  res.render('rdr', { name: "projects", title: 'Ripple Down Rules for Explainable AI' });
})

// heartbeat
router.get('/heartbeatbasedauthentication', function (req, res) {
  res.render('heartbeat', { name: "projects", title: 'Heartbeat Based Authentication in Wearable Devices' });
})

module.exports = router;
