var request = require('request')

module.exports = function (id, text, cb) {
  var opt = {
    url: this.url + '/wd/hub/session/' + this.sessionId + '/element/' + id + '/value',
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    json: true,
    form: '{desiredCapabilities: ' +
      '{' +
        'value: ' + text +
      '}' +
    '}'
  }
  request(opt, function (err, res, body) {
    if (err) throw new Error(err)
    cb(body)
  })
}
