var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('see the search result', function (t) {
  atcc.text('lst-ib', function (result) {
    t.match(result, /nekoatsume/, 'the search box should have the word in search result page')
  })
})
