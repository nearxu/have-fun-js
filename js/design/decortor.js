
const biycle = () => {};

biycle.prototype = {
    constructor:biycle,
    ride:function(){},
    getPrice:() => 500
}

let biycleDecortor = (biycle) => {
    this.biycle = biycle;
}

biycleDecortor.prototype = {
    constructor:biycleDecortor,
    getPrice:() => this.biycle.getPrice()
}

const b = new biycleDecortor();

console.log(b.getPrice());