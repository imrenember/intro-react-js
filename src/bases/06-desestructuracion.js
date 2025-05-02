// //Destructuration or assigment destructu...

const person = {
    name: 'Renember',
    lastname: 'Nino',
    age: 23,
    password: 1234,
  
};


// const {name, lastname, age} = person;


// console.log(name, lastname)
// console.log(lastname)

const getContext = ({password,age}) => {
    // const {name, lastname, age} = person;
    //  console.log(name, lastname, age);
    return{
        namePassword: password,
        ages: age,
    }
}


const {namePassword, ages} = getContext(person);

console.log(namePassword, ages);
