
// 节流 如果你持续触发事件，每隔一段时间，只执行一次事件。

function throt(fn,wait){
  var context,args;
  var previous = 0;
  return function(){
    var now = +new Date();
    context = this;
    args = arguments;
    if(now - previous > wait){
      fn.apply(context,args)
      previous = now
    }
  }
}