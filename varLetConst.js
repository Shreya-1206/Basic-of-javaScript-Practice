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