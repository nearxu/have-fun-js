
// subject

// 主题中心
function Subject() {
  this.Observers = []; // 所有观察者
}

Subject.prototype.addObserver = function (observer) {
  console.log('addObserver')
  const isTrue = this.Observers.indexOf(observer) !== -1;
  isTrue ? console.log('is excit') : this.Observers.push(observer);
}

Subject.prototype.removeObserver = function (observer) {
  const index = this.Observers.indexOf(observer);
  if (index > -1) {
    this.Observers.slice(index, 1);
  }
}

Subject.prototype.notify = function () {
  console.log('notify')
  this.Observers.forEach(observer => observer.update.call(undefined))
}

// 观察者
function Observers() {
  this.update = function () {
    console.log('update')
  }
  this.subscribeTo = function (Subject) {
    Subject.addObserver(this);
  }
}

const getmoney = new Subject();

const tom = new Observers();
tom.update = function () {
  console.log('shopping')
}
tom.subscribeTo(getmoney);

getmoney.notify();
