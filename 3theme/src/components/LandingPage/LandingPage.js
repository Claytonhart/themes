import React from 'react';
import styled from 'styled-components/macro';
import withPageWrapper from '../Layout/withPageWrapper';

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 70px;
  line-height: 1;

  span {
    color: ${props => props.theme.primary.orange};
  }
`;

const Info = styled.div`
  color: ${props => props.theme.primary.lightgrey};
  margin-bottom: 50px;

  span {
    color: ${props => props.theme.primary.orange};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.div`
  color: ${props => props.theme.primary.lightgrey};
  line-height: 1.5;
  margin-bottom: 40px;
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  i {
    color: #fff;
    cursor: pointer;
    font-size: 24px;
  }
`;

const LandingPage = () => {
  return (
    <>
      <div>
        <Header>
          Clarence <span>Taylor</span>
        </Header>
        <Info>
          3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468 ·{' '}
          <span>NAME@EMAIL.COM</span>
        </Info>
      </div>
      <Description>
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </Description>
      <SocialLinks>
        <SocialLink href='#!'>
          <i className='fab fa-linkedin-in'></i>
        </SocialLink>

        <SocialLink href='#!'>
          <i className='fab fa-github'></i>
        </SocialLink>

        <SocialLink href='#!'>
          <i className='fab fa-twitter'></i>
        </SocialLink>

        <SocialLink href='#!'>
          <i className='fab fa-facebook-f'></i>
        </SocialLink>
      </SocialLinks>
    </>
  );
};

export default withPageWrapper(LandingPage);
