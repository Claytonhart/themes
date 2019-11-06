import React from 'react';
import styled from 'styled-components/macro';

import LandingPage from '../LandingPage/LandingPage';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

const Container = styled.div`
  overflow: auto;
  flex: 1;
  max-height: 100vh;

  > * {
    min-height: 100vh;
  }
`;

const Main = () => {
  return (
    <Container>
      <Skills />
      <LandingPage />
      <Experience />
    </Container>
  );
};

export default Main;
