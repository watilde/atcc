var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('open the browser', function (t) {
  atcc.go('http://google.com', function (body) {
    t.ok(!!body)
  })
})
