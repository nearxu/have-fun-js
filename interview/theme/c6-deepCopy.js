

// solw Object.assign({},a)
// but just only one

function deepCopy(source) {
  var target = Array.isArray(source) ? [] : {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof (key) === 'object' && key !== null) {
        target[key] = deepCopy(key)
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// JSON.stringify(obj)

// JSON.parse(obj)