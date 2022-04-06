import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Container = styled.table`
  ${tw` h-12 w-11/12 bg-white shadow-md rounded-sm mt-28 hidden sm:table`}
`;

export default function Table() {
  return (
    <Container>
      <thead>
        <tr>
          <th>ID</th>
          <th>Quantidade</th>
          <th>Nome do Produto</th>
          <th className="text-center">
            <FaEdit className=" text-blue-700 text-xl mx-auto" />
          </th>
          <th>
            <FaTrash className=" text-red-600 text-xl mx-auto" />
          </th>
        </tr>
      </thead>
    </Container>
  );
}
