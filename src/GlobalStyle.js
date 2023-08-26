import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
 font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
 color: #333;
 background-color: #000;
 font-size: 16px;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;

}
`;
