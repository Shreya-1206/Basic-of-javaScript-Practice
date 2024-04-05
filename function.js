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