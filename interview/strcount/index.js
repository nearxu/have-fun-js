
// so simple solution
const strCount = str => {
    let obj = {}
    for(let i=0;i<str.length;i++){
        obj[str[i]] = (obj[str[i]]+1) || 1;
    }
    return obj;
}

console.log(strCount('hello world'))

