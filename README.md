# Atcc
Light weight selenium client in Node.js

## Install
via npm
// Actually, this project isn't published yet
```
$ npm install atcc
```

## Usage
// Will be updated by async/await
```js
var Atcc = require('atcc')
var atcc = new Atcc()

atcc.open({browserName: 'firefox'}, function () {
  atcc.go('http://google.com',function () {
    atcc.title(function (title) {
      assert(title, 'Google') // Yay!
    })
  })
})
```

## API Docs

### THE ATCC CLASS
```js
var Atcc = require('atcc')
var atcc = new Atcc()
```

### Open a browser
```js
atcc.open({
  browserName: 'firefox'
}, cb)
```

+ **browserName** -  This name is case sensitive and should be lowercase.
+ **cb** -  You can see the result as an argument.

### Close a browser
```js
atcc.close(cb)
```

+ **cb** -  You can see the result as an argument.


### Navigate to a URL
```js
atcc.go('URL', cb)
```

+ **'URL'** -  Should be full URL to navigate the browser to a URL.
+ **cb** -  You can see the result as an argument.

### Get the title
```js
atcc.title(cb)
```

+ **cb** -  You can get the title String as an argument

### Find an HTML element
```js
atcc.find({
  'using': [options],
  'value': 'value'
}, cb)
```

+ **using** -  You pick a method to find an element from [options](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelement).
+ **value** -  Pass the String depending on the `using` you passed.
+ **cb** -  You can see the result as an argument.

### Type a string into an element
```js
atcc.type(id, text, cb)
```

+ **id** -  This is the ID of the element you'd like to type.
+ **text** - Will be typed into the element you specified.
+ **cb** -  You can see the result as an argument.

### Click an element
```js
atcc.click(id, cb)
```

+ **id** -  This is the ID of the element you'd like to click.
+ **cb** -  You can see the result as an argument.

### Get the text of an element
```js
atcc.text(id, cb)
```

+ **id** -  This is the ID of the element you'd like to know the text of.
+ **cb** -  You can see the result as an argument.

### Get the status
```js
atcc.status(cb)
```

+ **cb** -  You can see the result as an argument.


## LICENSE
The MIT License (MIT)

See also: [LICENSE](/LICENSE).
