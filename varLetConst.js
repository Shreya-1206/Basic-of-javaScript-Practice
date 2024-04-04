var x = 1;
// console.log(`Global  variable: ${x}`);

function varHoist() {
    var x = 10;
    var a = 90;
    x =789;
    console.log(`function variable: ${x}`);
    console.log(`function  variable: ${a}`);
}
varHoist();
console.log(`Global  variable: ${x}`);
// console.log(`function  variable: ${a}`);


var cost =100;
if(cost >= 100) {
    var cost = 90;
    console.log(`Special cost ${cost}`);
}

console.log(`Golbal cost ${cost}`);


var xx = 90;

for(var xx=0; xx<= 10; xx++) {   //it got incremented to 11 here and move out and js engine quickly printed the value
                                 // of xx as 11  becoz it pointing to same memory space 
 console.log(`Print xx ${xx}`)
}
console.log(`outer xx value ${xx}`);


let d =9; //script scope of d chk on source  code

{
    let d =99;   //this has block scope of d
    console.log(d);
}

console.log(d);