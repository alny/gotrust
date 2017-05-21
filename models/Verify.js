var mongoose = require('mongoose')

var verifySchema = new mongoose.Schema({
    name: {type: String, default: ''},
    email: {type: String, default: ''},
    steamid: {type: String, lowercase: true, default: ''},
    image: {type: String, default: ''},
    facebookid: {type: String, lowercase: true, default: ''},
    deposit: {type: String, default: ''},
    role: {type: String, default: ''},
    score: {type: String, default: ''},
    status: {type: String, default: false},
    timestamp: {type: Date, default: Date.now}
})

verifySchema.methods.summary = function(){
  var summary  = {
      name: this.name,
      email: this.email,
      steamid: this.steamid,
      image: this.image,
      facebookid: this.facebookid,
      deposit: this.deposit,
      role: this.role,
      score: this.score,
      status: this.status,
      timestamp: this.timestamp,
      id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('verifySchema', verifySchema)
