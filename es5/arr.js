
let arr = [1,2,3,4]
let a = arr => {
    arr.push(5);
    arr.pop()
    // first
    arr.shift()
    arr.unshift(1)
    arr.reverse()
    // not change origin arr

    arr.concat([6,7,8])

    // arr.slice(start,end)
    // retrun new arr
    arr.slice(0)

    // not use splice(start,count)

    return arr
}

console.log(a(arr))

const arr1 = [1,2,3,4]
const arrSplice = (arr) => (index,count,item) => arr.splice(index,count,item)
//return delete arr
console.log(arrSplice(arr1)(0,3))
