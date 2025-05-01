import {getHeroeById} from './bases/03-import'
const getHeroeByAsync = (id) => {


return new Promise( (resolve, reject) => {
     setTimeout( () =>  {
        
         const p1 = getHeroeById(id);
         if(p1){
           resolve(p1);
         }
         else{
          reject('No se pudo encontrar el heroe');
         }
        
          
         }, 2000) });

        };
      

        // se puede tambien
        //getHeroeByAsync(1).then(heroe => console.log('Heroe', heroe))
        getHeroeByAsync(15).then(console.log)
         // se puede hacer tambien como abajo
         .catch((error) => console.warn(error) );
       // .catch(console.warn);