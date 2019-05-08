
function defineReactive(data, key, val) {
  observe(val); // for all attr
  var dep = new Dep();
  Object.defineProperty(data, key, {
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target) // add sub
      }
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      console.log('key:' + key + ' have observe ,new val: ' + newVal);
      dep.notify(); // if change attr notify
    }
  })
}

function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}

// var book = {
//   book1: { name: '' },
//   book2: ''
// }

// observe(book)
// book.book1.name = 'vue-observe'

// book.book2 = 'no book'

function Dep() {
  this.subs = [];
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update();
    })
  }
}
