var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function(req, res){
  res.render('books')
})

router.get('/books/new', function(req, res){
  res.render('new')
})

router.post('/book', function(req, res){
  res.redirect('books')
})

router.get('/books/:id/edit', function(req, res){
  res.render('edit')
})

router.post('books/edit', function(req, res){
  res.redirect('books')
})

router.post('/books/:id/delete', function(req, res){
  res.redirect('books')
})



module.exports = router;
