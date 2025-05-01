

/* const getImagenPromesa = () => {
  const promesa = new Promise ( (resolve, reject) =>
{
 resolve('https://google.com')
})
return promesa;
}

getImagenPromesa().then(console.log) */

// Lo mismo simplificado



const getImagenPromesa = async() => {
 try {
  const apiKey = 'twGuKdsXjgRdY761hz9rugqSETyMiKxw';
  const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const {data}=  await peticion.json();
   const {url} = data.images.original;

  const img = document.createElement('img');
    img.src = url;
  console.log({data});
  document.body.append(img);
 } catch (error) {
   console.log('error');
   //console.error(error)
 }
};

getImagenPromesa();

