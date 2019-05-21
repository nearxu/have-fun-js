
// js singla
// async solute

setTimeout(function () { console.log(1) }, 0);
console.log(2)

// callback

function buy(name, good, callback) {
  console.log(name, good);
  if (callback && typeof (callback) === 'function') {
    callback()
  }
}

buy('xiaoming', 'apple', function () {
  console.log('callback finish');
})