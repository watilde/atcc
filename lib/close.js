var request = require('request')

module.exports = function (cb) {
  var opt = {
    url: this.url + '/session/' + this.session_id,
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    json: true
  }
  request(opt, function (err, res, body) {
    if (err) throw new Error(err)
    cb(body)
  })
}
