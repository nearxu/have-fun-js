
// str => arr split  arr => str join
// const randomStr = () => Math.random().toString(36).substring(7).split('').join('.')

// console.log(randomStr())

const a = [1, 2, 3, 4, 4, 5, 6, 6];

function unitArr(arr) {
  let response = [];
  for (let i = 0; arr.length; i++) {
    if (response.indexOf(arr[i]) < 0) {
      response.push(arr[i]);
    }
  }
  return response;
}

console.log(unitArr(a));