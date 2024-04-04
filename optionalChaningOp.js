const res = [
    {
        name :"Odisha Hotel",
        state : "Bangalore",
        location : {
            lat : "12.9716",
            long: "77.5946"
    
        }
    },

    {
        name :"Phakhala  Resort & Spa",
        state : "Bangalore",
    },

];
console.log(`Location of Odisha hotel : ${res[0].location.lat}, ${res[0].location.long}`);
console.log(`Location of Phakhala  Resort & Spa  : ${res[1].location?.lat}, ${res[1].location?.long}`);
