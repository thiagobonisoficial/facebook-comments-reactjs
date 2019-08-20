import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';

const GlobalStyle = createGlobalStyle`
    ${Reset}

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        background-color: #F2F2F2;
        color: #3E3E3E;
        -webkit-font-smoothing: antialiased !important;
    }

`;

export default GlobalStyle;
