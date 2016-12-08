var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //render the main menu
    res.render('index');
});
router.get('/about', function(req, res) {
    res.render('about');
});
router.get('/about', function(req, res) {
    res.render('about');
});
router.get('/projects', function(req, res) {
    res.render('projects');
});
router.get('/contact', function(req, res) {
    res.render('contact');
});

router.get('/cartMaster', function(req, res) {
    //render the game
    res.render('cartMaster', {
        isHosting: true,
        isPublicGame: false
    });
});

/*
app.get('/download', function(req, res){

  var file = fs.readFileSync(__dirname + '/upload-folder/dramaticpenguin.MOV', 'binary');

  res.setHeader('Content-Length', file.length);
  res.write(file, 'binary');
  res.end();
});
*/

router.get('/game2', function(req, res) {
    //render the game
    res.render('babylon');
});
module.exports = router;