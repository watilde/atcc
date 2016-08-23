var request = require('request')

module.exports = function (options, cb) {
  var that = this
  var opt = {
    url: this.url + '/wd/hub/session',
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    json: true,
    form: '{desiredCapabilities: {browserName: ' + options.browserName + '}}'
  }
  request(opt, function (err, res, body) {
    if (err) throw new Error(err)
    if (body.state === 'success') that.sessionId = body.sessionId
    cb(body)
  })
}
