import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const withPageLayout = Component => props => {
  return (
    <Container>
      <Content>
        <Component {...props} />
      </Content>
    </Container>
  );
};

export default withPageLayout;
