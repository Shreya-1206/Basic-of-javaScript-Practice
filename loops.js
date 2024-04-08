for (let i = 1; i<=12; i++){
    console.log(`loop from 1  to ${i}`);

}   

let sum = 0;
for (let j =0; j <= 50; j++) {
    sum += j ;
    console.log(`Sum of 0 to ${j} is ${sum}`);
}

const numArray = [
    {
        x :9,
        y :89
    },
    {
        x :2,
        y :3
    },
    {
        x :56,
        y :107
    },
    {
        x :9,
        y :9
    },
    {
        x :23,
        y :12
    }
];
for(let i = 0; i<numArray.length; i++ ) {
    console.log(`${numArray[i].x} * ${numArray[i].y} = ${numArray[i].x *  numArray[i].y }`);
}

const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Kiwi', 'Strawberry'];

for (let j =0; j<fruits.length; j++) {
    if(fruits[j] === "Banana") break;
    console.log(fruits[j]);

}

const shoppedItems = [['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Kiwi', 'Strawberry'],
                      ['Potato', 'Lady Finger', 'Tomatoes', 'Jackfruit', 'Beans'] ];

for (let m =0; m<shoppedItems.length; m++) {
    for (let n = 0; n<shoppedItems[m].length; n++) {
             console.log(shoppedItems[m][n]) ;
    }
}                      

const people = [
    {
        name : "Himant",
        age :34,
        proffession : 'Doctor',
    },
    {
        name : "Sarah",
        age :30,
        proffession : 'Hr',
    }
];

const infoPeople = (person) => {
    return `Name : ${person.name} \nAge : ${person.age} \nProffession : ${person.proffession}`
}

console.log(infoPeople(people[1]));

for (const x of people) {
    console.log(infoPeople(x))
}

//Arbitary function

function avg() {
  let sum =0;
  for(const argument of arguments) {
    sum += argument;
  }
  return sum/arguments.length;
}

console.log(avg(1,2,3,4,5,6,7,8,9,10));

//for-in
const forPeople = {
    name :"Shreya",
    age :24,
    hobbies : ["coding", "Reading","Travelling"]
}
console.log(forPeople["name"]);
console.log(forPeople.age)

for(const key in forPeople) {
    console.log(key);
}

function add(a, b) {
    return a + b
}
console.log(add(2, 10))


//while loop and do while 

let n =1;
let oddNumsArr =[];

while(n<=50) {
    oddNumsArr.push(n);
    n += 2;
}
console.log(oddNumsArr.toString())

do {
    oddNumsArr.push(n);
    n += 2;
}while(n <= 50)

console.log(`WITH DO WHILE : ${oddNumsArr.toString()}`);


//recursive Function

const loopMe = function recurr(maxCount, cb, counter =0) {
    if(counter < maxCount) {
        cb(counter);
        return recurr(maxCount,cb, counter + 1);
    }
}
loopMe(10, function(count) {
    console.log(`Hey the counter got printed for ${count}`)
});


//call power with reccur

const calPower = function(num, power = 1) {
    if(power !== 1) {
      return num * (calPower(num, power -1));
    }
    return num;
}

console.log(`Power will be ` + calPower(2,8))


let product = "The 'Thomas Mackeral' Prize for the most popular \"Fish\"" ;
console.log(product);

const x = 0;

while (x < 10) {
  console.log(x);
  x++;
}


