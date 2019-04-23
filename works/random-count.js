
// mdn array

// slice(start,end) not change origin arr

// splice(start,count) change origin arr




const arr = [1,2,3,4,5,6,7];

// const columnCount = (n) => {
//     let count = 0;
//     return function(){
//         count += n;
//         return count;
//     }
// }

// console.log(columnCount(3)());
// console.log(columnCount(3)());
// console.log(columnCount(3)());

let count = 0;

// so bad
const sliceArr = (arr,n) => {
    if(count >= arr.length){
        count = 0;
    }
    let result = [];
    result = arr.slice(count,n);
    count += n;
    return result;
}

// const sliceArr = (arr) => {
//     if(count >= arr.length){
//         // const index = count % arr.length;
//         // count = -index;
//     }
//     let end;
//     if(count > 0){
//         end = count+3;
//     }else {
//         end = 3;
//     }
//     let result = [];
//     result = arr.slice(count,end);
//     count += 3;
//     return result;
// }

for(let i =0;i<arr.length;i+=3){
    console.log(sliceArr(arr,i+3));
}
