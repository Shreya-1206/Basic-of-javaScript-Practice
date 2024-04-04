const cost = 1299;

if(cost > 1000) console.log("Hey u got 5% discount 😃 !!");
if(cost < 1000) console.log("Sorry there is no discount for you 🙄!! ");

const  currentHour = new Date().getHours();

if(currentHour >= 0 && currentHour < 15) {
    console.log("Good Afternoon 🌞")
} else {
    console.log("Have a nice day 🌈")
}

