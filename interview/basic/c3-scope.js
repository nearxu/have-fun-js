
var a = 1;
var b = function(){
  console.log(a);
  var a = 2;
  return a;
}
console.log(b())


var c = 3;

function d(){
  var c = 4;
  function f(){
    return c
  }
  return f()
}

d()()