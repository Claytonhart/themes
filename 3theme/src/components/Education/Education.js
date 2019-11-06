import React from 'react'
import styled from 'styled-components/macro';

import withPageLayout from '../Layout/withPageWrapper'

const Header = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  /* color: ${props => props.theme.primary.grey}; */
`

const Education = () => {
  return (
    <>
      <Header>Education</Header>
      <EducationItem title={"University of colorado boulder"} degree={"bachelor of science"} major={"Computer Science - Web Development Track"} gpa={"GPA: 3.23"}/>

      <EducationItem title={"James buchanan high school"} degree={"technology magnet program"} gpa={"GPA: 3.56"}/>
    </>
  )
}

const ItemHeader = styled.h4`
  text-transform: uppercase;
`

const

const EducationItem = ({title, degree, major, gpa}) => {
  return (
    <div>
      <ItemHeader>{title}</ItemHeader>
    </div>
  )
}

export default withPageLayout(Education)
