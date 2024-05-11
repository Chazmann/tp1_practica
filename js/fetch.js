//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('../data/personas.json')
//espero respuesta
.then(response => {
    //almacena los datos obtenidos convertidos a json
    return response.json()
    })
.then(data => {
  
    for (let i=0; i < data.length; i++){
        console.log(data[i].nombre)
        document.getElementById('lista').innerHTML += `<li> ${data[i].nombre} - <b>${data[i].profesion}</b> </li>` 
       
    }
})
