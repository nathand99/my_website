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

// SQLI page route.
router.get('/sqli', function (req, res) {
  res.render('sqli', { name: "blog", title: 'OWASP Top 10 Vulnerabilities - #1 SQLI' });
})

// Modern Encryption page route.
router.get('/modern_encryption', function (req, res) {
  res.render('modern_encryption', { name: "blog", title: 'Modern Encryption' });
})

// further encryption page route.
router.get('/further_encryption', function (req, res) {
  res.render('further_encryption.pug', { name: "blog", title: 'Further Encryption' });
})

// HDT page route.
router.get('/hotdogthursday', function (req, res) {
  res.render('hotdogthursday.pug', { name: "blog", title: 'HDT' });
})

module.exports = router;