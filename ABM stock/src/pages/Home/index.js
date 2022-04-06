import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/index';
// import axios from '../../services/axios';

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getProducts() {
      // const response = await axios.get('');
      const response = ['323', '32321'];
      return setProducts(response.data);
    }
    getProducts();
  }, []);

  console.log(products);

  return (
    <Table>{/* {products.map((product) => console.log(product))} */}</Table>
  );
}

export default Index;
