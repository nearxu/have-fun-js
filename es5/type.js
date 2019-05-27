var a = 1;
var b = '2'
var c = true;
var d = undefined;
var e = null;

var f = a;
f = 2;
console.log(f,a)

// only ourself address

// but obj

var h = {name:'tom'}
var e = h;
e.name = 'marry';

console.log(h) // h.name === 'marry'

// so copy
// object.assign

const target = {a:1}

const source1 = {b:2}
const source2 = {c:3}

Object.assign(target,source1,source2)
console.log(target)

// and some complex
const source3 = {person:{name:'tom',add:{town:'nanshan'}}}
Object.assign(target,source3)

console.log(target)

var target1 = target
target1.person.name = 'near'
console.log(target)

// how to deepCopy
// specified property as its own property boolean
const deepCopy = (obj) => {
    var newobj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof(key) === 'object'){
                newobj[key] = deepCopy(obj[key])
            }else{
                newobj[key] = obj[key]
            }
        }
    }
    return newobj
}

const ab = {name:'tom'}

const cd = deepCopy(ab)

cd.name = 'marry'

console.log(ab)

// solute2

const deepKeys = obj => {
    let clone = Object.assign({},obj);
    Object.keys(clone).forEach(
        k => (clone[k] = typeof(obj[k]) === 'object' ? deepKeys(obj[k]):obj[k])
    )
    return clone
}

const ef = deepKeys(cd)
ef.name = 'near'

console.log(cd)
