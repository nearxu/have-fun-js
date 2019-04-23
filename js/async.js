

// callback

function A(callback){
    console.log('this is a');
    setTimeout(() =>{
        console.log('async');
        callback();
    },1000)
}

const b = () => console.log("b");

A(b);


// promise

function PromiseA(){
    console.log('a');
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('async');
            resolve();
        },2000)
    })
}

PromiseA().then(b);

// await

async function AwaitA(){
    console.log('await a')
    const delay = () => setTimeout(() => {
        console.log('async');
    },3000);
    await delay();
    b();
}

AwaitA();