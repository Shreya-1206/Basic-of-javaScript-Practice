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
