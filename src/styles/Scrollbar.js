import { css } from 'styled-components';

import Colors from './Colors';

const Scrollbar = css`
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${Colors.greys.light};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${Colors.blues.light};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${Colors.blues.light2};
    }
`;

export default Scrollbar;
