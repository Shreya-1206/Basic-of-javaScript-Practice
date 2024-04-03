var city = "Bangalore";
var country = "India";
var name = "Sugu"

var loc = city +', ' +country;
console.log(loc); 

var quote = "Hello 'Welcome' To Basics Of  \"JavaScript\" !!";
console.log(quote);

var details = 'Name : ' +name +'\nLocation : ' + loc + '\nFavourite Quote : ' + quote ;
console.log(details) ;

//using template literals

var details2 = `My name is ${name}. I stay in ${loc}, and ${quote}`;
console.log(details2);

var equ = '2 + 2';
console.log(`${equ} = ${2 +2}`);