const a =9;
const b =63;

const buttonPressed = 'Modulus';

switch(buttonPressed) {
    case'ADD' :
    const sum =a+b; 
    console.log('The result of the addition is: ',sum);
    break;

    case 'SUBTRACT' :
    const diff =a-b; 
    console.log('The result of the substraction is: ',diff);
    break;    

    case 'Multiply' :
    const mul =a*b; 
    console.log('The result of the multiplication is: ',mul);
    break;   
    
    case 'Division' :
    const div =a/b; 
    console.log('The result of the division is: ',div);
    break;

    case 'Modulus' :
    const mod =a%b; 
    console.log('The result of the modulus is: ',mod);
    break;

    default : 
    throw new Error("Invalid Action Please choose from theses ADD, SUBTRACT, MULTIPLY, DIVISION, MODULUS");
}


const itemSelected ='Apple';
let typeOfItem;

switch (itemSelected) {
    case 'Apple':
    case 'Banana':    
    case 'Mango':
    case 'Guava':
    case 'kiwi':  
     type = 'Fruits';           
     break;

    
     case 'Potato':
     case 'Lady-Finger':    
     case 'Tomatoes':
     case 'Carrot':
     case 'Broccali':  
       type = 'Vegetables';           
       break;
    
}

console.log(`${itemSelected} belongs to ${type}`);
