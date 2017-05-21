var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username: {type: String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    role: {type: String, default: ''},
    timestamp: {type: Date, default: Date.now}
})

UserSchema.methods.summary = function(){
  var summary  = {
      username: this.username,
      email: this.email,
      role: this.role,
      timestamp: this.timestamp,
      id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('UserSchema', UserSchema)
