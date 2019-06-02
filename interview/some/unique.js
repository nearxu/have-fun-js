

const unique = arr => arr.filter((item,index,array) => {
    return array.indexOf(item) === index
})

console.log(unique([1,3,4,5,4,3,6,7]))

const objArr = [
    {id:1,name:'tom1'},
    {id:11,name:'tom11'},
    {id:1,name:'tom11'},
    ,{id:11,name:'tom111'},
    {id:111,name:'tom11'},
    {id:11,name:'tom1'}
]

// console.log(unique(objArr)) cant solute
// just array.includes

// reduce

// array.prototype.findIndex return index
// array.prototype.includes return boolean

const uniqueReduce = arr => {
    return arr.reduce((pre,cur) => {
        let newArr = pre.concat();
        const index = newArr.findIndex(m => m.id === cur.id);
        if(index > -1){
            newArr[index] = cur;
        }else{
            newArr.push(cur)
        }
        return newArr;
    },[])
}

console.log(uniqueReduce(objArr))