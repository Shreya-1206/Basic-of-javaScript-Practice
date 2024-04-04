const quantity = 0;
console.log(`Quantity is ${quantity || 'N/A'}`);


//suppose shipping of first item is null which means add 2.5 shipping charges 
//for the seconf item  shipping is for free 

const products =[
    {
        name :'Thermal bottle',
        price : 1000,
        shipping :null
    },

    {
        name :'Coffee Mug',
        price : 500,
        shipping :0
    }
];

console.log(`Product Name : ${products[1].name || 'No product available by that name'}`) ;
console.log(`Product Price : ${products[1].price || 'N/A' }`) ;
console.log(`Product ShippingRate : ${products[1].shipping ?? "2.5"}`) ;


