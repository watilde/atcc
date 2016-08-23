var request = require('request')

module.exports = function (id, cb) {
  var opt = {
    url: this.url + '/wd/hub/session/' + this.sessionId + '/element/' + id + '/text',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    json: true
  }
  request(opt, function (err, res, body) {
    if (err) throw new Error(err)
    cb(body)
  })
}
