import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi, method = 'GET', data) {

  const config = {
    method: method,
    mode: 'cors',
    credential: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (data) config.body = JSON.stringify(data);
  
  const response = fetch(urlApi, config)

  return response;
}

const data = {
  "title" : "From Trash Man to Cash Man",
  "price" : 400,
  "description" : "Personal Growth",
  "categoryId" : 5,
  "images" : [
    "https://placeimg.com/640/480/any"
  ]
}

//221 // 222

// postData(`${API}/products`, 'POST', data)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .finally(() => console.log("finally"))

// postData(`${API}/products/221`, 'PUT', data)
// .then(response => response.json())
// .then(data => console.log(data))
// .finally(() => console.log("finally"))

// postData(`${API}/products`, 'GET')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .finally(() => console.log("finally"))