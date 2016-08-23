var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('get the title', function (t) {
  atcc.go('http://google.com', function (title) {
    t.assert(title, 'Google')
  })
})
