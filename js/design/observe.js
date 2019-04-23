

// function Publish(){
//     this.subscribe = [];
// }

// Publish.prototype.deliver = function(data){
//     this.subscribe.forEach(fn => fn(data))
//     return this;
// }

class EventEmit{
    constructor(){
        this.events = this.events;
    }
}


// emit
EventEmit.prototype.emit = (type,...args) => {
    let handle;
    handle = this.events.get(type);
    if(args.length > 0){
        handle.apply(this,args);
    }
    return true;
}

// type
EventEmit.prototype.on = (type,fn) => {
    const handle = this.events.get(type);
    handle.push(fn);
}

// off

EventEmit.prototype.off = (type,fn) => {
    const handle = this.events.get(type);
    if(handle && typeof handle === 'function'){
        this.events.delete(type,fn);
    }
}

const emit = new EventEmit();

let tnm = name => console.log(name);

emit.on('hello',tnm);
