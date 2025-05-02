
console.log('Holaaaaaaa');

const nombre = 'Renember';
let apellido = 'Nino';


     const nombreCompleto = `${nombre} ${apellido}`;

   
 console.log(nombre);
console.log(nombreCompleto); 

function getSaludo(nombre){

    return 'Hola' + nombre;
}

    const getSaludo2 = (nombre) => {return `Hola  ${nombre}` }
    console.log(getSaludo2)

console.log(`Esto es un saludo: ${getSaludo(nombreCompleto)}`);


const getUser = () => ({
    uid: 'ABC13',
    username: 'imrenember'
})

const user = getUser();
console.log(user);

function getUserActive (nombre) {
    return { 
        uid: 'ABC13',
        username: nombre,

    }
}

const userActive = getUserActive('Renember');
console.log(userActive);

const getUserActive2 = (nombre) => ( { 
    uid: 'ABC13',
    username: nombre,

})
console.log(getUserActive2);
