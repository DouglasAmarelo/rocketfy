import React from 'react';
import { Container } from './styles';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

const List = ({ data }) => (
  <Container done={data.done}>
    <header>
      <h2>{data.title}</h2>
      {data.creatable && (
        <button>
          <MdAdd size={24} color="#fff" />
        </button>
      )}
    </header>

    <ul>
      {data.cards.map(card => (
        <Card key={card.id} data={card} />
      ))}
    </ul>
  </Container>
);

export default List;
