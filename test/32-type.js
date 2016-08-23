var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('type the word into the search box', function (t) {
  atcc.type('lst-ib', 'nekoatsume', function (result) {
    t.ok(!!result, 'should be no error')
  })
})
