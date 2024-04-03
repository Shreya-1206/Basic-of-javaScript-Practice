const fruits =['apple','banana','orange'];
console.log(fruits instanceof  Array);

console.log(fruits[2]);
console.log(fruits.length);
fruits.push("mango");
console.log(fruits);

console.log(`My Favorite fruit is ${fruits[fruits.length -1]}`);

fruits.pop();
console.log(fruits);

fruits[3] ='kiwi';
fruits[1] ="mango";
console.log(fruits);

fruits[7] ='grapes';
console.log(fruits);
console.log(fruits.length);


var users = [
    {
        id :101,
        name :"Shreya"
    },
    {
        id :102,
        name :"Sugu"
    },
    {
        id :103,
        name :"Richard"
    },
    {
        id :104,
        name :"Payal"
    }
];

var admins = [...users];
admins[2] = {id :103 , name : 'Rooh'}; //only reassign can change  the value of object in array 

console.log(users[2]);
console.log(admins[2]);


//equality chk
console.log(1 === true);
console.log(0 === false);
console.log(0 == false);
console.log(1 == true);
console.log(null === undefined);
console.log(null == undefined);

console.log(10 != '10');
console.log(20 !== '20');

//realtional chk
console.log(5 > 6);
console.log(null >= 0); //true


///exception Handling
const x =90;
const y = 70;
try {
    if(typeof x !== typeof y) {
        throw  new Error('Both are not numbers')
    }
  var z = x + y;
  console.log(z);  
} catch (error) {
    console.log('an error occured', error);
} finally{
   console.log("this runs whatever happens");        
}
