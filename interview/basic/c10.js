
var obj = {
  value:1
}

function foo(o){
  o.value = 2;
  console.log(o.value)
}

foo(obj)
console.log(obj.value)