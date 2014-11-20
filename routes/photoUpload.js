var express = require('express');
var router = express.Router();
var Photo = require('../models/Photo');

exports.upload = function(req,res,next){
  console.log(req.files);//Test
  console.log(req.body);//Test

  var img = req.files['photo[image]'];
  var name = req.body.photo.name || img.name;

  Photo.create({
    name:name,
    path:img.name
  },function(err){
    if(err) return next(err);
    res.redirect('/');
  });

};
