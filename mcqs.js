//ifif
(function(a){
    return (function(){
      console.log(a);
      a = 6;
    })()
   })(21);


//Empty statement 
;  

console.log("yes excetuted the empty statement ..!!!");
document.write("This statement is wiith document.write () ");
// alert("please ignore this document.write() !!");
//these all three comes under displaying data in the form of js 


// Eval means excuting the following variables
var x=12;
var y=8;
var res=eval("x+y");
document.write(res); 


//
function solve(arr, rotations){
  if(rotations == 0) return arr;
  for(let i = 0; i < rotations; i++){
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
 }
console.log(solve([44, 1, 22, 111], 5));


// one quirky thing of js 
var chkNull = null;
console.log(typeof chkNull); /// lol is not undefined it returns obj 

console.log(typeof null === 'object');

/// 
var a = 1;  
var b = 0;  
while (a <= 3)  
{  
   a++;  
   b += a * 2;  
   console.log(b);
}


//min-max function return corresponding when no arguments are passed 
var a = Math.max();
var b = Math.min();
console.log(a);
console.log(b);

// chk booleans + number
var a = true + true + true * 3;
console.log(a); // 5 becoz true = 1 and follow the operator precedence sttarting with *


console.log(NaN === NaN);  /// Nan is never equal to nan  hence false 
console.log('45f' !== '45f'); // so this also false 
console.log(typeof NaN);  /// yolo 😂 its a number type is number despite its name(not a number).


//toLocaleString ()
const date = new Date();
console.log(date.toLocaleString()); 


const obj = new Object();
console.log(obj.toLocaleString());

const number = 123456.789;     //consider this as number obj 
console.log(number.toLocaleString());

const array = [1234.5678, 9876.5432]; 
console.log(array.toLocaleString()); 

const string = 'kite';
console.log(string.toLocaleString()); //js here takes the string and treats it as String Obj



console.log(parseInt("123Hello"));
console.log(parseInt("Hello123"));

//code sinap
var a = "hello";
var sum = 0;
for(var i = 0; i < a.length; i++) {
   sum += (a[i] - 'a');
}
console.log(sum);

//obj === obj 
const obj1 = {name :"akash"};
const obj2 = {name :"akash"};

console.log(obj1 === obj2);

const objAssign = Object.assign({}, obj1)
console.log('With assign -' , obj===objAssign);

////
const example = ({ a, b, c }) => {
  console.log(a, b, c);
 };
example({a:1, b :"shreya", c :"shreya56" });


///
function dog() {
  console.log("I am a dog.");
}
dog.sound = "Bark";

//test typeof args
function test(...args) {
  console.log(typeof args);
 }
 test(12);