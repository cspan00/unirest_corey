var express = require('express');
var router = express.Router();
var unirest = require('unirest')
require('dotenv').load();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function(req, res){
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.NYT_API_KEY)
    .end(function (response) {
      res.render('books', {books: response.body.results.books})
    })

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
