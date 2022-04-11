import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Validation from '../../services/validationForm';
import axios from '../../services/axios';

const Container = styled.form`
  ${tw` w-[97%] p-5 mb-5 mx-auto relative font-medium bg-white shadow-md rounded-2xl dark:text-white`}
`;
export default function Store() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const instace = new Validation();
    if (instace.error.length > 0) return;
    instace.values.date = new Date();
    await axios.post('/', instace.values);
    instace.form.submit();
  };

  return (
    <Container
      onSubmit={handleSubmit}
      action="/"
      method="get"
      className="dark:bg-slate-800"
    >
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
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            className="input-text email"
            placeholder="Email:"
            name="email"
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            className="input-text category"
            placeholder="Categoria:"
            name="category"
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
        <div className="relative">
          <input
            type="number"
            className="input-text quantity"
            min={1}
            placeholder="Quantidade:"
            name="quantity"
            autoComplete="off"
          />
        </div>
        <label
          htmlFor="checkbox"
          className="h-12 dark:bg-[#232F44] bg-gray-100 shadow-md text-gray-600 dark:text-gray-300 pt-3 text-center sm:col-span-2"
        >
          O produto esta disponivel?
          <input
            id="checkbox"
            type="checkbox"
            name="active"
            className="ml-2 active"
            value="passcheck"
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
