import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import TableHead from '../../components/HeaderTable';
import axios from '../../services/axios';

const Container = styled.div`
  ${tw` w-[97%] mb-5 mx-1.5 font-medium`}
`;

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('');
      return setProducts(response.data);
    }
    getProducts();
  }, []);

  async function handleDelete(id, e) {
    await axios.delete(`/${id}`);
    const element = e.target;
    element.parentNode.parentNode.remove();
  }

  return (
    <Container>
      <TableHead />
      <div className="w-full h-full relative">
        {products.map((product) => {
          return (
            <div
              key={product._id}
              className=" grid-configs grid-cols-custom mb-2 rounded-xl md:rounded-sm shadow-md"
            >
              <div className="grid-items relative">
                <small className="grid-label-item">Id:</small>
                <small className=" text-xs ">{product._id}</small>
              </div>
              <div className="grid-items relative">
                <small className="grid-label-item">Status:</small>
                {product.active ? 'Ativado' : 'Desativado'}
              </div>
              <div className="grid-items relative">
                <small className="grid-label-item">Produto:</small>
                {product.product.name}
              </div>
              <div className="grid-items relative">
                <small className="grid-label-item">Preço:</small>
                {product.price}
              </div>
              <div className="grid-items relative">
                <small className="grid-label-item">Quantidade:</small>
                {product.quantity}
              </div>
              <div className="grid-items relative">
                <small className="grid-label-item">Selecionar:</small>
                <Link
                  to={`/view/${product._id}`}
                  className="grid-link-global bg-blue-500"
                >
                  Selecionar
                </Link>
              </div>
              <div className="grid-last-items relative">
                <small className="grid-label-item">Apagar:</small>
                <button
                  onClick={(e) => handleDelete(product._id, e)}
                  type="button"
                  className="grid-last-link-global bg-red-600"
                >
                  Deletar
                </button>
              </div>
            </div>
          );
        })}
        <div className=" mb-3 flex justify-end items-center ">
          <Link to="/store" className="grid-link-store">
            Add+
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Index;
