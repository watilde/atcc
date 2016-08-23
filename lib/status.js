var request = require('request')

module.exports = function (cb) {
  var opt = {
    url: this.url + '/wd/hub/status',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    json: true
  }
  request(opt, function (err, res, body) {
    if (err) throw new Error(err)
    cb(body, res)
  })
}
