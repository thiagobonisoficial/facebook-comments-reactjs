import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import Colors from './Colors';
import Scrollbar from './Scrollbar';

const GlobalStyle = createGlobalStyle`
    ${Reset}

    body {
        ${Scrollbar}

        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        background-color: ${props =>
            props.light ? 'white' : Colors.greys.light};
        color: ${Colors.greys.dark3};
        -webkit-font-smoothing: antialiased !important;
    }

`;

GlobalStyle.defaultProps = {
    dark: true,
};

export default GlobalStyle;
