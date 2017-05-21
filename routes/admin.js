var express = require('express');
var router = express.Router();
var superagent = require('superagent')
var Verify = require('../models/Verify')
var utils = require('../utils')

function isAdmin(req, res, next){
  utils.JWT.verify(req.session.token, process.env.TOKEN_SECRET)
  .then(function(decode){
    var userId = decode.id
    console.log('USER ID: '+userId)
    User.findOne({_id: userId}, function(err, findFrag){
      if(err)return next()
      if(findFrag._id == process.env.ADMIN_ID || '5904bc4ed2fc8c1166b8d51d'){
        return next()
      } else {
        res.redirect('/');
      }
    });
  })
}


router.get('/dashboard', function(req, res, next){
  Verify.find()
    // .where({status: { $exists: false }})
    .exec(function(err, allUsers){
    if(err) return next(err);
    res.render('admin/dashboard', {allUsers: allUsers})
    });
});

router.post('/accept/:id', function (req, res, next){
  var id = req.params.id

  Verify.findOne({_id: id}, function(err, verify){
    if(err) return next(err)

    if(req.body.email) verify.email = req.body.email;
    if(req.body.role) verify.role = req.body.role;
    if(req.body.image) verify.image = req.body.image;
    if(req.body.steamid) verify.steamid = req.body.steamid;
    if(req.body.facebookid) verify.facebookid = req.body.facebookid;
    if(req.body.deposit) verify.deposit = req.body.deposit;

    verify.status = true

    verify.save(function(err){
      if(err) return next(err)
      res.redirect('/admin/dashboard')
      });
  });
});

module.exports = router;


function isLoggedIn(req, res, next){
  if(req.session.token){
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next){
  if(!req.session.token){
    return next();
  }
  res.redirect('/');
}
