var request = require('request')

module.exports = function (options, cb) {
  var that = this
  var opt = {
    url: this.url + '/wd/hub/session/' + this.sessionId + '/element',
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    json: true,
    form: '{desiredCapabilities: ' +
      '{using: ' +
        options.using + ',' +
        'value: ' + options.value +
      '}' +
    '}'
  }
  request(opt, function (err, res, body) {
    if (err) throw new Error(err)
    cb(body)
  })
}
