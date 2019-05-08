
function Model() {
  this.text = 'hello';
}

function controller(model) {
  var that = this;
  this.model = model;
  this.handleEvent = function (e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        that.clickHandler(e.target);
        break;

      default:
        console.log(e.target);
    }
  }
  this.getModelByKey = function (modelKey) {
    return that.model[modelKey];
  }
  this.clickHandler = function (target) {
    that.model.text = 'world';
    target.innerText = that.getModelByKey('text')
  }
}

function view(controller) {
  this.controller = controller;
  this.domButton = document.getElementById('demo-button');
  this.domButton.innerText = controller.getModelByKey('text');
  this.domButton.addEventListener('click', controller)
}

function main() {
  var models = new Model();
  var controllers = new controller(models);
  var views = new view(controllers)
}

main()