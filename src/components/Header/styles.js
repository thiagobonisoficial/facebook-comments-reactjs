import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';
import Colors from 'styles/Colors';

export const Container = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: ${Colors.blues.light};
    color: white;

    ${Breakpoints.xs`padding: 1rem 2em 1rem 2rem;`}
    ${Breakpoints.md`padding: 1rem 2em 1rem 2rem;`}
`;

export const LogotypeContainer = styled.div`
    flex: 1;
    height: auto;
`;
