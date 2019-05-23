function Person(name) {
  this.name = name;
  this.getName = function () {
      console.log(this.name);
  };
}

Person.prototype.say = function(){
  console.log(this.name)
}

var person1 = new Person('kevin');

console.log(person1.say())