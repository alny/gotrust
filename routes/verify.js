var Verify = require('../models/Verify')
var express = require('express');
var router = express.Router();


router.get('/checkSteam/:uId', function(req, res, next) {
  var uId = req.params.uId;
  console.log(uId)

  Verify.findOne({"steamid" : {$regex : uId}})
    .exec(function(err, result) {
      if(err){
        res.json({
          confirmation: 'fail',
          result: null
        })
        return
      }
      res.json({
        confirmation: 'success',
        result: result
      })
    });
})

router.get('/checkFacebook/:uId', function(req, res, next) {
  var uId = req.params.uId;
  console.log(uId)

  Verify.findOne({"facebookid" : {$regex : uId}})
    .exec(function(err, result) {
      if(err){
        res.json({
          confirmation: 'fail',
          result: null
        })
        return
      }
      res.json({
        confirmation: 'success',
        result: result
      })
    });
})

module.exports = router
