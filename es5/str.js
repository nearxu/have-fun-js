
const str = '1,2,3,4';

const arr = str.split(',')

const arrToStr = arr.join(',')

console.log(arr,arrToStr)

const strCount = str => {
    let obj = {};
    for(let i=0;i<str.length;i++){
        obj[str[i]] = (obj[str[i]]+1) || 1;
    }
    return obj
}

const allStr = '1,2,3,4,2,3,4';

console.log(strCount(allStr))

// some error

const strFor = str => {
    var obj = {};
    for(let i in str){
        if(str[i] in obj){
            obj[str[i]]++
        }else{
            obj[str[i]] = 1;
        }
    }
    return obj;
}
console.log(strFor(allStr))