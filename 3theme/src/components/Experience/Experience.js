import React from 'react';
import styled from 'styled-components/macro';
import withPageLayout from '../Layout/withPageWrapper';

const Header = styled.h2`
  color: ${props => props.theme.primary.grey};
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Content = styled.div`
  /*  */
`;

const ExperienceItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const ExperienceContent = styled.div`
  margin-right: 80px;
`;

const ExperienceHeader = styled.h4`
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1;
`;

const ExperiencePlace = styled.h6`
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 5px;
  color: ${props => props.theme.primary.lightgrey};
`;

const ExperienceDesc = styled.p`
  font-size: 16px;
  color: ${props => props.theme.primary.lightgrey};
`;

const ExperienceTimes = styled.div`
  min-width: 200px;
  color: ${props => props.theme.primary.orange};
`;

const Experience = () => {
  return (
    <>
      <Header>Experience</Header>
      <Content>
        <ExperienceItem></ExperienceItem>
        <ExperienceItem></ExperienceItem>
        <ExperienceItem></ExperienceItem>
        <ExperienceItem></ExperienceItem>
      </Content>
    </>
  );
};

const ExperienceItem = () => (
  <ExperienceItemContainer>
    <ExperienceContent>
      <ExperienceHeader>Senior Web Developer</ExperienceHeader>
      <ExperiencePlace>Intelitec Solutions</ExperiencePlace>
      <ExperienceDesc>
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new normal that has
        evolved from generation X is on the runway heading towards a streamlined
        cloud solution. User generated content in real-time will have multiple
        touchpoints for offshoring.
      </ExperienceDesc>
    </ExperienceContent>
    <ExperienceTimes>
      <p>March 2013 - Present</p>
    </ExperienceTimes>
  </ExperienceItemContainer>
);

export default withPageLayout(Experience);
