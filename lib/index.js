var defaults = require('./defaults')

function Atcc (options) {
  var opt = Object.assign({}, defaults, options)
  this.url = opt.origin + ':' + opt.port
}

Atcc.prototype.status = require('./status')
Atcc.prototype.open = require('./open')
Atcc.prototype.go = require('./go')
Atcc.prototype.find = require('./find')
Atcc.prototype.type = require('./type')
Atcc.prototype.click = require('./click')
Atcc.prototype.text = require('./text')
Atcc.prototype.title = require('./title')
Atcc.prototype.close = require('./close')

module.exports = Atcc
