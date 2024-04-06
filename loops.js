for (let i = 1; i<=12; i++){
    console.log(`loop from 1  to ${i}`);

}   

let sum = 0;
for (let j =0; j <= 50; j++) {
    sum += j ;
    console.log(`Sum of 0 to ${j} is ${sum}`);
}

const numArray = [
    {
        x :9,
        y :89
    },
    {
        x :2,
        y :3
    },
    {
        x :56,
        y :107
    },
    {
        x :9,
        y :9
    },
    {
        x :23,
        y :12
    }
];
for(let i = 0; i<numArray.length; i++ ) {
    console.log(`${numArray[i].x} * ${numArray[i].y} = ${numArray[i].x *  numArray[i].y }`);
}

const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Kiwi', 'Strawberry'];

for (let j =0; j<fruits.length; j++) {
    if(fruits[j] === "Kiwi") break;
    console.log(fruits[j]);

}

const shoppedItems = [['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Kiwi', 'Strawberry'],
                      ['Potato', 'Lady Finger', 'Tomatoes', 'Jackfruit', 'Beans'] ];

for (let m =0; m<shoppedItems.length; m++) {
    for (let n = 0; n<shoppedItems[m].length; n++) {
             console.log(shoppedItems[m][n]) ;
    }
}                      

