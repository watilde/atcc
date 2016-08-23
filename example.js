var Atcc = require('./lib/')
var atcc = new Atcc()

atcc.open({
  browserName: 'firefox'
}, function (data) {
  console.log(data)
})
