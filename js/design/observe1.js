

var Event ={ 
    list : {}, // callback list
    listen: function(key,fn) {
        console.log('evnt listen');
        if(!this.list[key]){
            this.list[key] = []
        }
        this.list[key].push(fn);
    },
    tigger : function() {
        console.log('evnt trigger');
        var key = Array.prototype.shift.call(arguments);
        fns = this.list[key];
        if(!fns || fns.length === 0){
            return false;
        }
        for(var i=0,fn;fn =fns[i++]; ){
            fn.apply(this,arguments)
        }
    },
    remove : function(key,fn){
        console.log('event remove')
        var fns = this.list[key];
        if(!fns) return false;
        for(var l=fns.length -1;l>0;l--){
            var _fn = fns[l];
            if(_fn === fn){
                fns.splice(l,1);
            }
        }
    }
}

const getPrice = (price) => console.log(price);

Event.listen('hello', getPrice)

Event.tigger('hello',2000);

Event.remove('hello',getPrice)