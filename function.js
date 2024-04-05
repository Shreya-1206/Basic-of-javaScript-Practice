//function declaration

function computeArePerimeter (length, breath) {
  const area = Number(length) * Number(breath);
  const perimeter = 2*(Number(length)+Number(breath));

  console.log(`The  area of the rectangle is ${area} and its perimeter is ${perimeter} 🤓`);
}

computeArePerimeter(60,80);    //for now we are not returning anything it just  logs to the console
computeArePerimeter(7,10);


//functions are hoisted

console.log(`Your Total bill : ${computeDiscount(3400)}`);

function computeDiscount(cost) {
 const discountApplied = Number(cost) > 1200 ? 5 : 0;
 const totalCost = cost - cost*( discountApplied/100);
 return totalCost;
}

const point1 = {
   x : 23,
   y: 34
};

const point2 = {
    x : 30,
    y: 34
 };

function calculateDistance (p1, p2) {
    return Math.hypot(p2.x -p1.x , p2.y - p1.y)
 }

console.log(`Distance between the two points are  : ${calculateDistance(point1, point2)}`);

/// function expression

const todayIs = function() {
    const days =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const today = new Date().getDay();
    console.log(today);
    return days[today];
}

console.log(`Today is ${todayIs()} 💛`);


const convertTemp= function (tempNum, converTo) {
    const toUnit = converTo || 'F';
    const temp = Number(tempNum) || 0;

    if(toUnit === 'F') {
        let farhenhiet = (temp *9) /5 +32 ;
        return `${farhenhiet}\u{00B0}F`
    }else {
        let celcius = ((temp -32) * 5)/9;
        return `${celcius}\u{00B0}C`
    }

}

console.log(convertTemp('97', 'C')); // 15

/// this.keywoord with function inside obj

const persons = [
    {
        name :"Sugu",
        age : 24,
        proffession : "Data Analyst",
        sayHi : function () {
            return `Hey Everyone , I am ${this.name} 🙋‍♂️`
        },
        canDrive : function () {
            if (this.age > 18) {
                return `Yes, ${this.name} can drive 🚗!!`
            }
        },
    }
];

persons[0].myJob = function () {
    return `I love my job as a ${this.proffession}  🧰`;
};
console.log(persons[0].myJob());
console.log(persons[0].canDrive());


let raja= {
    height : 165,
    weight : 70,
    gender : 'M',
    age: 28
};

let sara = {
    heigt : 155,
    weight : 63,
    gender : 'F',
    age : 24
};

const calculateBmi =function () {
    return this.weight /(this.height/100) ** 2;
}

const calculateBmr = function() {
   if(this.gender === 'M') {
    return 66.47 + 13.75 * this.weight + 5.009 * this.height - 6.755 * this.age;
   }else {
    return 655.1 + 9.563 * this.weight + 1.852 * this.height - 4.676 * this.age;
   }
}

console.log(`Raja BMI is : ${calculateBmi.call(raja)}`);

console.log(`Raja BMR is : ${calculateBmr.call(raja)}`);


///Arror function 

const area = (l,b) => Number(l) * Number(b);
const perimeter =(l,b) => 2 *(Number(l)+Number(b));
console.log(`Area : ${area(20,30)}`);
console.log(`Perimeter : ${perimeter(20,30)}`);


//this keyword doesnt have effect on arrow fn
const obj ={
    x :23,
    y:89,
    addZ : () => {
        return this.x + this.y
    }
}
console.log(obj.addZ());   ///gives Nan

const obj2 ={
    x :23,
    y:89,
    addZ :function () {
        return () => this.x +this.y // we know that fucntions are first-class  objects in js so we can return a function from function
    }
}
const addz = obj2.addZ(); ///here it invokes and returns the function of addz present in the obj2
// which remembers its lexical scope  so it can access the parent context

console.log(addz())  ;   //gives 112