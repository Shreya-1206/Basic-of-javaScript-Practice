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

