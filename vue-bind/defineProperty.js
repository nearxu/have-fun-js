
// 数据劫持
var book = {}

var name = ''

Object.defineProperty(book, 'name', {
  set: function (value) {
    name = value;
    console.log('set name' + value)
  },
  get: function () {
    return name;
  }
})

book.name = 'vue defined'