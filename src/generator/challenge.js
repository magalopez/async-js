import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const httpFetch = async (url) => {
  const response = await fetch(url)
  const data = await response.json();
  return data;
}

async function* iteratorResponse (url) {
  const products = await httpFetch(`${url}/products`);
  const product =  await httpFetch(`${url}/products/${products[0]?.id}`);
  const category = await httpFetch(`${url}/categories/${product?.category?.id}`);
  
  yield console.log(products[1])
  yield console.log(product)
  yield console.log(category)
}

const iterator = iteratorResponse(API);
iterator.next()
iterator.next()
iterator.next()