
// 原型链继承

function Parent () {
  this.name = 'kevin';
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin

// 组合继承

function Parent1(name){
  this.name = name;
  this.color = ['red','blue']
}

Parent1.prototype.getName = function(){
  console.log(this.name)
}

function Child1(name,age){
  Parent1.call(this,name);
  this.age = age
}

Child1.prototype = new Parent1()

var child1 = new Child1('tom',18)

child1.color.push('block')

console.log(child1.name,child1.color) //

var child2 = new Child1('dasy',20)
console.log(child2.name,child2.color)
