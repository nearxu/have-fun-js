// v1
// function SelfVue(data, el, exp) {
//   this.data = data;
//   var self = this;
//   // add proxy
//   Object.keys(data).forEach(function (key) {
//     self.proxyKeys(key);
//   })
//   observe(data);
//   el.innerHTML = this.data[exp];
//   new Watcher(this, exp, function (val) {
//     el.innerHTML = val
//   })
//   return this;
// }

// v2
function SelfVue(options) {
  var self = this;
  this.data = options.data;
  this.methods = options.methods;

  // add proxy
  Object.keys(this.data).forEach(function (key) {
    self.proxyKeys(key);
  })

  observe(this.data);
  new Compile(options.el, this)

  if (options.mounted) {
    options.mounted.call(this)
  }
}

SelfVue.prototype = {
  proxyKeys: function (key) {
    var self = this;
    Object.defineProperty(this, key, {
      get: function proxyGetter() {
        return self.data[key]
      },
      set: function proxySetter(newval) {
        return self.data[key] = newval
      }
    })
  }
}