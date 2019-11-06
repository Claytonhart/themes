import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: {
    orange: '#bd5d38',
    grey: '#343a40',
    lightgrey: '#868e96'
  }
};

const withTheme = Component => props => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withTheme;
