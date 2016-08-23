var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('open the browser', function (t) {
  atcc.open({browserName: 'firefox'}, function (body) {
    t.assert(body.state, 'success')
  })
})
