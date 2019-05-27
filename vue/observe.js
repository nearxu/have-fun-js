
function observe(obj){
    if(typeof(obj) === 'object'){
        if(Array.isArray(obj)){
            for(let i=0;i<obj.length;i++){
                observe(obj[i])
            }
        }else{
            let keys = Object.keys(obj)
            for(let key of keys) observe(key)
        }
    }
}

// compile replace (ele,origen)