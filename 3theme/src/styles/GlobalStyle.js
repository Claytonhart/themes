import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h2{
  color: ${props => props.theme.primary.grey};
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  }
`;

export default GlobalStyle;
