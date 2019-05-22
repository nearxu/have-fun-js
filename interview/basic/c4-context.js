var f1 = function(){
  console.log('f1')
}

f1()

var f1 = function(){
  console.log('f2')
}
f1()

function f2(){
  console.log('f2')
}

f2()

function f2(){
  console.log('f3')
}

f2()

function fn3(){
  console.log('fn3')
}

function fn2(){
  console.log('fn2 go')
  fn3()
  console.log('fn2 out')
}

function fn1(){
  console.log('fn1 go')
  fn2()
  console.log('fn1 out')
}

fn1()


