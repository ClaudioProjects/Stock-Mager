import axios from 'axios';

export default axios.create({
  // Cole aqui a url gerada pelo site, lembre de colocar /products no final
  baseURL: 'https://crudcrud.com/api/47013fe796a345a09f0c8a321f2d3060/products',
});
