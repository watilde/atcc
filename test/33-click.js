var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('search the word', function (t) {
  atcc.click('lst-ib', function (result) {
    t.ok(!!result, 'should be no error')
  })
})
