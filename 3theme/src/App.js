import React from 'react';
import styled from 'styled-components';

import { GlobalStyle, withTheme } from './styles';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </>
  );
}

export default withTheme(App);
