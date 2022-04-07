import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import styled from 'styled-components';
import tw from 'twin.macro';

const Head = styled.div`
  ${tw`w-full shadow-lg mb-2 h-12 pt-3 lg:pt-2 rounded-t-2xl bg-white text-center border-b-2 hidden md:grid grid-cols-[18.4% 14.2% 18.4% 14.2% 14.2% 10% 10%] text-[13px] lg:text-lg`}
`;

export default function TableHead() {
  return (
    <Head id="Head-table">
      <div>ID</div>
      <div>Status</div>
      <div>Produto</div>
      <div>Preço</div>
      <div>Quantidade</div>
      <div className="pt-2">
        <FaEdit className=" text-blue-700 text-xl mx-auto" />
      </div>
      <div className="pt-2">
        <FaTrash className=" text-red-600 text-xl mx-auto" />
      </div>
    </Head>
  );
}
