var Photo = require('../models/Photo');
var path = require('path');
var join = path.join;

exports.download = function(dir){
  return function(req,res,next){
    var id = req.params.id;
    Photo.findById(id,function(err,photo){
      if(err) return next(err);
      var path = join(dir,photo.path);
      res.download(path,photo.name);
    });
  };
};
