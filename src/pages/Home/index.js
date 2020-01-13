import React from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';

import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Header
        title='Home'
      />
      <Container>
        <Title>Hello World</Title>
      </Container>
    </>
  );
}
