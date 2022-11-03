const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new xmlHttpRequest();

  xhttp.open('GET', urlApi, true); // → prepara la petición para ser enviada tomando tres parámetros: prótocolo, irl, asíncrono (true);
  xhttp.onreadystatechange = function (event) { // → es un eventHandler que es llamado cuando la propiedad readyState cambia.

    // Existen 5 estados en un llamado XMLHttpRequest:
    // 0 → Se ha inicializado.
    // 1 → Loading (cargando).
    // 2 → Se ha cargado.
    // 3 → Procesamiento si existe alguna descarga.
    // 4 → Completado
    
    if(xhttp.readyState === 4) { // → retorna el estado de la petición
      if (xhttp.status === 200) { // → retorna el estado de la respuesta de la petición (200, 400, 500)
        callback(null, JSON.parse(xhttp.responseText));
      }
      else {
        const error = new Error('Error → ' +  urlApi);
        return callback(error, null)
      }
    }
  }

  xhttp.send(); // → envia la petición
}

// callback hell
fetchData(`${API}/products`, function (error1, data1) {
  if(error1) return console.log(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if(error2) return console.log(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      if(error3) return console.log(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    })
  })
})