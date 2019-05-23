var arr = [1, [2, [3, [4,5,5]]]];

const floatArr = arr => {
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? floatArr(cur):cur)
  },[])
}

console.log(floatArr(arr))