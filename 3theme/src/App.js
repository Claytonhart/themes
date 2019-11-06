import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const theme = {
  primary: {
    orange: '#bd5d38',
    grey: '#343a40',
    lightgrey: '#868e96'
  }
};

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
