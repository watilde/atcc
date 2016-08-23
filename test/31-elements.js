var test = require('tap').test
var Atcc = require('../lib/')
var atcc = new Atcc()

test('get the search box element', function (t) {
  atcc.find({
    'using': 'id',
    'value': 'lst-ib'
  }, function (tag) {
    t.ok(!!tag, 'expect the search box')
  })
})
