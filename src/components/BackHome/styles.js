import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Colors from 'styles/Colors';

const Hyperlink = styled(NavLink)`
    width: auto;
    height: auto;
    padding: 0.7rem 2.7rem 0.7rem 2.7rem;
    background-color: ${Colors.blues.light};
    color: white;
    border-radius: 30px;
`;

export default Hyperlink;
