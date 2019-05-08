
function Model() {
  var that = this;
  var text = 'hello';
  this.listeners = [];
  Object.defineProperty(that, 'text', {
    get: function () {
      return text
    },
    set: function (newVal) {
      text = newVal;
      this.notify(newVal);
    }
  })
}

Model.prototype.subscribe = function (listener) {
  this.listeners.push(listener)
}

Model.prototype.notify = function () {
  var that = this;
  this.listeners.forEach(function (listener) {
    const text = listener.controller.getModelByKey('text');
    renderHtml(text);
    // listener.call(that, value)
  })
}

function Controller(model) {
  var that = this;
  this.model = model;
  this.handleEvent = function (e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        this.clickHandler(e.target)
        break;

      default:
        console.log(e.target)
    }
  }
  this.getModelByKey = function (modelKey) {
    return this.model[modelKey];
  };
  this.clickHandler = function (target) {
    that.model.text = 'world';
  }

  setTimeout(function () {
    that.model.text = '3s change';
  }, 3000)
}

function View(controller) {
  var that = this;
  this.controller = controller;
  var elements = document.querySelectorAll('[data-tw-bind="text"]');
  elements.forEach(function (element) {
    if (element.type === 'button') {
      element.innerText = controller.getModelByKey('text');
      element.addEventListener('click', controller);
    }
  })
  this.controller.model.subscribe(this);
}

function renderHtml(val) {
  var elements = document.getElementById('demo-button');
  elements.innerText = val;
}
function main() {
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
}

main()