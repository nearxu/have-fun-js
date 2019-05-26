
// so simple solution
const strCount = str => {
    let obj = {}
    for(let i=0;i<str.length;i++){
        obj[str[i]] = (obj[str[i]]+1) || 1;
    }
    return obj;
}

console.log(strCount('hello world'))

let arr = [];
arr[4] = null;
console.log(arr)
let rand = () => Math.floor(Math.random()*32+2);
console.log(rand())

let randArr = () => arr.filter((item ,index ,array) => array.indexOf(rand()) > -1 ? array.push(rand()):array)

console.log(randArr())
