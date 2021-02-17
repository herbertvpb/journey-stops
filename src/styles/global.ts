import { createGlobalStyle } from 'styled-components';

import spaceBackground from '../assets/space-background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${spaceBackground}) no-repeat;
    background-size: cover;
  }

  body, input, button {
    font: 16px sans-seriff
  }
`;
