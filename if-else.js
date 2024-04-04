const cost = 1299;

if(cost > 1000) console.log("Hey u got 5% discount 😃 !!");
if(cost < 1000) console.log("Sorry there is no discount for you 🙄!! ");


let season = 'summer'
if(season === 'summer') {
    console.log('Carry hats')
} else {
    console.log('Do not carry hats')
}

const  currentHour = new Date().getHours();

if(currentHour >= 0 && currentHour < 12) {
    console.log("Good Afternoon 🌞")
} else if(currentHour >= 12 && currentHour < 16) {
    console.log("Good AfterNoon 😎")
} else if(currentHour >= 16 && currentHour < 20) {
    console.log("Good Evening 🥀")
} else {
    console.log("Good Night 🌙")
}