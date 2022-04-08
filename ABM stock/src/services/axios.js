import axios from 'axios';

export default axios.create({
  // Cole aqui a url gerada pelo site, lembre de colocar /products no final
  baseURL: 'https://crudcrud.com/api/222fdb8598894f64854bea5e8b8b0d50/products',
});
