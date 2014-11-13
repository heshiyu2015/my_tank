var express = require('express');
var router = express.Router();
var Photo = require('../models/Photo');

var photos = [];

photos.push({
  name:'Node.js Logo',
  path:'/images/logos/nodejs-green.jpg'
});

photos.push({
  name:'Ryan Spreaking',
  path:'/images/nodejs-green.jpg'
});

/*exports.list = function(req,res){
  res.render('photos',{
    title:'Photos',
    photos:photos
  });
};

exports.form = function(req,res){
  res.render('photos/upload',{
    title:'Photo Upload'
  });
}*/

router.get('/',function(req,res){
  Photo.find({},function(err,photos){
    if(err) return next(err);
    res.render('photos',{
      title:'Photos',
      photos:photos
    });
  });
});

router.get('/upload',function(req,res){
  res.render('photos/upload',{
    title:'Photo Upload',
  });
});

module.exports = router;
