var details = {
    name :'Sugu Raja',
    age: 25,
    gender:'Male',
    country :"India",
    occupation:'Software Developer',
}

console.log(details); // Outputs the object with all its properties and their values

var nameOfEmployee ='name';
console.log(details[nameOfEmployee]);

console.log(details['gender']);
console.log(details.age);


details.isActive = false;
details.isActive =true;
console.log(details);

var suguLocation = new Object();
suguLocation.country='India';
suguLocation.city='Bangalore'; 
suguLocation.currency = "Rupees" 


console.log(`Sugu stays ${details.country} and its currency is ${suguLocation.currency}`);