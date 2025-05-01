// promesas se crean con dos callback resolve y reject
import { getHeroeById } from '../src/bases/03-import';



const promesa = new Promise( (resolve, reject) => {
     setTimeout( () =>  {
        // resolve()
        //import el getHeroeById
       /*   const heroe = getHeroeById(2);
         console.log(heroe) */
         const p1 = getHeroeById(1);
         resolve(p1);
        //  reject('No se pudo encontrar el error');
         }, 2000) });

/* 
 hacer algo cuando la promesa se termine
promesa.then la promesa se hizo correctamente
promesa.catch dio error o llamamos reject
y finally es lo ultimo en ejecutar despues de then o chath */

promesa.then( (heroe) => {
    console.log('Heroe', heroe)
})

  .catch(error =>  console.warn( error) ) ;