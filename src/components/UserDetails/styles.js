import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Username = styled.span`
    margin: 0 1rem 0 0;
    font-weight: bold;
    text-transform: uppercase;

    ${Breakpoints.xs`display: none;`}
    ${Breakpoints.sm`display: block;`}
`;
