// blog.js - projects route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.render('blog', { name: "blog", title: 'My blog' });
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

// Home page route.
router.get('/html_cheatsheet', function (req, res) {
    res.render('html_cheatsheet.pug', { name: "blog", title: 'html_cheatsheet' });
})

module.exports = router;