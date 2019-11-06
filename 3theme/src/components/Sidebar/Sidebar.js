import React from 'react';
import styled from 'styled-components/macro';

import image from '../../images/profile.jpg';

const Container = styled.nav`
  background-color: ${props => props.theme.primary.orange};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 250px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  border: 6px solid rgba(255,255,255,.2);
  margin-bottom: 20px;
  /* border: 1px solid ${props => props.theme.primary.orange}; */
  border-radius: 50%;
`;

const NavContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavContentItem = styled.li`
  color: rgba(255,255,255,.5);
  padding-bottom: 10px;
  text-transform: uppercase;
  cursor: pointer;
  /* color: ${props => props.theme.primary.lightgrey}; */
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Content>
        <Image src={image}></Image>
        <NavContent>
          <NavContentItem>About</NavContentItem>
          <NavContentItem>Experience</NavContentItem>
          <NavContentItem>education</NavContentItem>
          <NavContentItem>skills</NavContentItem>
          <NavContentItem>interests</NavContentItem>
          <NavContentItem>Awards</NavContentItem>
        </NavContent>
      </Content>
    </Container>
  );
};

export default Sidebar;
