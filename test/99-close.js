var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('close the browser', function (t) {
  atcc.close(function (body) {
    t.assert(body.state, 'success')
  })
})
