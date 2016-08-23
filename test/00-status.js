var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('check the status first', function (t) {
  atcc.status(function (body, res) {
    t.assert(res.statusCode, 200)
    t.assert(body.state, 'success')
  })
})
