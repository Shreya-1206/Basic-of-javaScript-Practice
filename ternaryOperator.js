const shoppingBill = 2500;

const discount = shoppingBill > 1500 ? 12 : 0;

const totalAmountToBePaid  = shoppingBill - shoppingBill*(discount/100);
console.log(`Your total bill after discount is ${totalAmountToBePaid}`);


const today = new Date().getDay();
const todayIs = today === 0 ? 'Sunday' : today === 1 ?  'Monday' : 
    today === 2 ? 'Tuesday' : today ===3? "Wednesday" : today === 4 ? 
     'Thursday' : today === 5 ? 'Friday' : 'Saturday';
console.log(`Today is ${todayIs} 😇`);