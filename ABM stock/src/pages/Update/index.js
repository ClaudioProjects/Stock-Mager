import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link, useParams } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Validation from '../../services/validationForm';
import axios from '../../services/axios';

const Container = styled.form`
  ${tw` w-[97%] p-5 mb-5 mx-auto relative font-medium bg-white shadow-md rounded-2xl`}
`;
export default function Update() {
  const [clientName, setClientName] = useState('');
  const [clientSurname, setClientSurname] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(Number);
  const [quantity, setQuantity] = useState(Number);
  const [active, setActive] = useState(Boolean);

  const { id } = useParams();

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('/');
      const values = response.data;
      console.log(values);
      setClientName(values[0].client.name);
      setClientSurname(values[0].client.surname);
      setClientEmail(values[0].client.email);
      setProductName(values[0].product.name);
      setCategory(values[0].product.category);
      setPrice(values[0].price);
      setQuantity(values[0].quantity);
      setActive(values[0].active);
    }
    getProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const instace = new Validation();
    if (instace.error.length > 0) return;
    instace.values.date = new Date();
    await axios.put(`/${id}`, instace.values);
    instace.form.submit();
  };

  return (
    <Container onSubmit={handleSubmit} action="/" method="get">
      <Link to="/" className="absolute right-1 top-1">
        <FaTimes className="text-3xl text-red-500" />
      </Link>
      <h1 className="text-2xl sm:text-4xl text-center font-bold mb-10">
        Cadastro de produtos
      </h1>
      <h2 className="text-center text-xl sm:text-2xl mb-5">
        Informações do usuario
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
        <div className="relative">
          <input
            type="text"
            className="input-text name"
            placeholder="Nome:"
            name="name"
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            minLength={3}
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            className="input-text surname"
            placeholder="Sobrenome:"
            name="surname"
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            minLength={3}
            value={clientSurname}
            onChange={(e) => setClientSurname(e.target.value)}
          />
        </div>
        <div className="relative">
          <input
            type="email"
            className="input-text email"
            placeholder="Email:"
            name="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />
        </div>
      </div>
      <h2 className="text-center text-xl sm:text-2xl mb-5">
        Informações do produto
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
        <div className="relative">
          <input
            type="text"
            className="input-text product"
            placeholder="Nome do produto:"
            name="product"
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            minLength={3}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            className="input-text category"
            placeholder="Categoria:"
            name="category"
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="relative">
          <input
            type=""
            className="input-text price"
            step="any"
            min={0.1}
            placeholder="Preço:"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="relative">
          <input
            type="number"
            className="input-text quantity"
            min={1}
            placeholder="Quantidade:"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <label
          htmlFor="checkbox"
          className="h-12 bg-gray-100 shadow-md text-gray-600 pt-3 text-center sm:col-span-2"
        >
          O produto esta disponivel?
          <input
            id="checkbox"
            type="checkbox"
            name="active"
            className="ml-2 active"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          />
        </label>
      </div>
      <button
        type="submit"
        className="text-white font-bold text-lg bg-green-500 h-14 rounded-md shadow-md w-[100%]"
      >
        Cadastrar
      </button>
    </Container>
  );
}
