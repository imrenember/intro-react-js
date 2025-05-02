

const person = {
    name: 'Renember',
    lastname: 'Nino',
    age: 23,
    direccion:{
        street: 12,
        avenue: 34,
        postalcode: 24500,

    }
};


const person2 = {...person};  //cloned objet easy
person.name = 'Andres'; // Modified name in objet person2

console.log(person.name);
console.log(person2);


const array = [1,2,3,4];
let array2 = [...array, 5];

let array3 = array2.map(
    function(num){
        return num * 2;
    }
);  //map broke a array and create a new arrray


console.log(array);
console.log(array2);
console.log(array3);