var Verify = require('../models/Verify')
var Promise = require('bluebird')
var utils = require('../utils')


module.exports = {

  get: function(params){
        return new Promise(function(resolve, reject){
          Verify.find(params, function(err, verify){
            if(err){
              reject(err)
              return
            }
            resolve(verify)
          })
        })
  },

  getById: function(id){
        return new Promise(function(resolve, reject){
          Verify.findById(id, function(err, verify){
            if(err){
              reject(new Error('Verify not Found'))
              return
            }
            if(verify == null){
              reject(new Error('Verify not Found'))
            }


            resolve(verify)
          })
        })
  },

  create: function(params){
        return new Promise(function(resolve, reject){

          params['steamid'] = utils.TextUtils.getFacebookID(params.steamid)
          params['facebookid'] = utils.TextUtils.getFacebookID(params.facebookid)


          Verify.create(params, function(err, verify){
            if(err){
              reject(err)
              return
            }
            resolve(verify)
          })
        })
  }




}
