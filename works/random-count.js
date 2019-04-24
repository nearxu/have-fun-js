
// mdn array

// slice(start,end) not change origin arr

// splice(start,count) change origin arr




const arr = [1, 2, 3, 4, 5, 6, 7];

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
// const sliceArr = (arr,n) => {
//     if(count >= arr.length){
//         count = 0;
//     }
//     let result = [];
//     result = arr.slice(count,n);
//     count += n;
//     return result;
// }

const sliceArr = (arr, length = 3) => {
    let result;
    const arrLength = arr.length;
    const times = Math.floor(arrLength / length);
    const left = arrLength % length;
    if (count === times) {
        result = arr.slice(-left).concat(arr.slice(0, length - left));
    } else {
        result = arr.slice(count * length, (count + 1) * length)
    }
    count++;
    if (count === times + 1) {
        count = 0;
    }
    return result;
    // const arrGroup = [];
    // const arrLength = arr.length;
    // const times = Math.floor(arrLength / length);
    // const left = arrLength % length;
    // for (let i = 0; i < times; i++) {
    //     arrGroup.push(arr.slice(i * length, (i + 1) * length));
    // }
    // if (left) {
    //     arrGroup.push(arr.slice(-left).concat(arr.slice(0, length - left)));
    // }
    // console.log(arrGroup);
    // return arrGroup;
    // if (count + 3 >= arr.length) {
    //     const index = arr.length % count;
    //     count = -index;
    // }
    // let end;
    // if (count > 0) {
    //     end = count + 3;
    // } else {
    //     end = 3;
    // }
    // let result = [];
    // result = arr.slice(count, end);
    // count += 3;
    // return result;
}
for (let i = 0; i < 10; i++) {
    console.log(sliceArr(arr));
}
