const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , ,p1] = personajes;

 console.log(p1);

 const retornaArreglo = () => {
    return ['ABC', 123];
 }

 const[letras, numeros] = retornaArreglo();
  console.log(letras, numeros);

  const getState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}]
  }

 const [nombre, getNombre]= getState('Goku');





 console.log(nombre);
 getNombre();