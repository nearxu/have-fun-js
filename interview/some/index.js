var a =10;

function b(){
    a = 5;
    console.log(a)
    console.log(this.a)
    var a;
    console.log(a)
    console.log(this.a)
}
b()

var lis = document.getElementsByTagName('li')

for (let i=0;i<lis.length;i++){
    lis[i].onclick = function(){
        alert(i)
    }
}