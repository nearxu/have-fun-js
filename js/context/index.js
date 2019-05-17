var scope = 'global'

function checkScope() {
  var scope = 'local'
  function f() {
    return scope
  }
  return f();
}

var a = checkScope()
console.log(a)

// cloumn is single

var nadd

var t = function () {
  var n = 99
  nadd = function () {
    n++;
  }
  var t2 = function () {
    console.log(n)
  }
  return t2
}

var a1 = t();
var a2 = t();

nadd()

a1()
a2()
a1()
a2()



