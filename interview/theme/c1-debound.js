
function debounce(fn,wait){
  var timeout;
  return function(){
    // v2 this
    var context = this;

    // v3 event
    var args = arguments;

    if(timeout) clearTimeout(timeout);
    // timeout = setTimeout(fn,wait)
    timeout = setTimeout(function(){
      fn.apply(context,args)
    },wait)
  }
}