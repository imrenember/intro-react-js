// import { heroes } from './data/heroes';

//console.log(heroes);
// Esto es una exportacion normal, tambien hay exportanciones por defecto
import {heroes} from '../data/heroes';
 
    const getHeroeById = (id, nombre) => {
        if(id === heroes.id ){
            return true
        }
        else {
            return false
        }
    }



    console.log(getHeroeById[2]);

  // export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

    //console.log( getHeroeById(2));

   export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

   // console.log( getHeroeByOwner('DC'));



