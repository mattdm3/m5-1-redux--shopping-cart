import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F2C1E5;
  }
  h1,h2,h3,h4,h5,p {
    margin: 0;
    padding: 0; 
  }

  p{
    color: #D0C6D0; 
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
