

// bind() 方法会创建一个新函数。当这个新函数被调用时，
// bind() 的第一个参数将作为它运行时的 this

var foo = {
  value:1
}

function bar(){
  console.log(this.value)
}

var bindFoo = bar.bind(foo)

console.log(bindFoo())

function barname(name){
  console.log(this.value)
  console.log(name)
}

var bindFoo = barname.bind(foo)

console.log(bindFoo('tom'))