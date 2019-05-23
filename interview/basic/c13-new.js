
// new obj and fun()

function foo(name){
  this.name = name;
  this.habit = 'game'
}

foo.prototype.age = 18;

function objectFactory(){
  var obj = {}
  Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj,arguments);
  return obj;
}

var person = objectFactory(foo,'tom');

console.log(person)