

const arr  = [1,1,2,2,3,3,4,4,4,5,5,6,7,7];

// arr1 arr2 for

function unique(arr) {
    let response = [arr[0]];
    for(let i=0;i<arr.length;i++){
        let flag = false;
        for(let j=0;j<response.length;j++){
            if(response[j] === arr[i]){
                flag = true;
                break;
            }
        }
        if(!flag){
            response.push(arr[i]);
        }
    }
    return response;
}

console.log(unique(arr));


// first sort 

function unique2(arr) {
    let sortArr = arr.sort();
    let response = [arr[0]];
    for(let i=0;i<arr.length;i++){
        if(sortArr[i] !== response[response.length -1]){
            response.push(arr[i]);
        }
    }
    return response;
}

console.log(unique2(arr));

// obj only key

function unique3(arr) {
    let response = [];
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 2;
            response.push(arr[i])
        }
    }
    return response;
}

console.log(unique3(arr));


// array.indexOf

function unique4(arr){
    let response = [];
    for(let i = 0;i<arr.length;i++){
        if(response.indexOf(arr[i]) === -1){
            response.push(arr[i]);
        }
    }
    return response;
}

console.log(unique4(arr));

// filter

function arrFilter(arr) {
    let response = [];
    response =  arr.filter(m => response.includes(m) ? '':response.push(m));
    return response;
    
}

console.log(arrFilter(arr));