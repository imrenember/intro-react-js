//fetch api
//giphy devellopers API para traer giphs animados

const apiKey = 'twGuKdsXjgRdY761hz9rugqSETyMiKxw';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// Esto es una promesa 
/* peticion.then(resp => {
  resp.json().then(data => {
    console.log(data)
  })
  //console.log(resp)
})
.catch(console.warn) */

// peticion con promesas en cadena
/* peticion
  .then(resp => resp.json())
  .then(({data}) => {            //({data}) usamos destructuracion para entrar a data interna
    console.log(data.images.original.url)
  }) 

  .catch(console.warn)
 */

  // promesas en cadenas y destructuracion
  peticion
  .then(resp => resp.json())
  .then(({data}) => {            //({data}) usamos destructuracion para entrar a data interna

    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    
  }) 

  .catch(console.warn)





























