
// 基础类型 number string undefined null boolean date
// object function array obj

console.log(Object.prototype.toString.call(undefined))

function isEmptyObj(obj){
  return !!obj ? (Object.keys(obj).length === 0):true
}

