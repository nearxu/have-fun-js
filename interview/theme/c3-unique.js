
var arrays = [1,2,4,5,"3","4","3",3,2,1,4,5,6];

const uniqueFilter = arr => {
  return arr.filter((item,index,array) => array.indexOf(item) === index)
}

console.log(uniqueFilter(arrays))



