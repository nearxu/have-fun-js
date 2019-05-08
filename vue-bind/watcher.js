
// 订阅者
function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get()
}

Watcher.prototype = {
  update: function () {
    this.run()
  },
  run: function () {
    var value = this.vm.data[this.exp];
    var oldvalue = this.value;
    if (value !== oldvalue) {
      this.value = value;
      this.cb.call(this.vm, value, oldvalue)
    }
  },
  get: function () {
    Dep.target = this;
    var value = this.vm.data[this.exp];
    Dep.target = null;
    return value
  }
}