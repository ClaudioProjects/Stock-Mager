import axios from 'axios';

export default axios.create({
  // Cole aqui a url gerada pelo site, lembre de colocar /products no final
  baseURL: 'https://crudcrud.com/api/d892e493708b486e90502f2bf8c61646/products',
});
