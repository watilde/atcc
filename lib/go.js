var request = require('request')

module.exports = function (url, cb) {
  var that = this
  var opt = {
    url: this.url + '/wd/hub/session/' + this.sessionId + '/' + url,
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    json: true
  }
  request(opt, function (err, res, body) {
    if (err) throw new Error(err)
    cb(body)
  })
}
