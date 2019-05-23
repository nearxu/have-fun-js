
function foo(name,age){
  console.log(arguments)
}

foo('tom',18)

// 传递参数

function foos(){
  bar.apply(this,arguments)
}

function bar(a,b,c){
  console.log(a,b,c)
}

foos(1,2,3)