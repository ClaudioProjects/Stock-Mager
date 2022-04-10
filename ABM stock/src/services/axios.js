import axios from 'axios';

export default axios.create({
  // Cole aqui a url gerada pelo site, lembre de colocar /products no final
  baseURL: 'https://crudcrud.com/api/f4dbe14afa274eee9f172756db7a22dc/products',
});
