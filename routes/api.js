var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }

  controller
  .get(req.query)
  .then(function(results){
    res.send({
      confirmation: 'success',
      results: results
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err
    })
  })

});

router.get('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }
  var id = req.params.id

  controller
  .getById(id)
  .then(function(result){
    res.send({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err.message
    })
  })

});

router.post('/:resource', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }

  controller
  .create(req.body)
  .then(function(result){
    res.send({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err.message
    })
  })

});




module.exports = router;
