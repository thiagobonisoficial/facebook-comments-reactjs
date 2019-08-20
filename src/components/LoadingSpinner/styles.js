import styled from 'styled-components';

import { Rotate } from 'styles/Animations';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        animation: ${Rotate} 2s linear infinite;
    }
`;

export const Message = styled.span`
    margin: 2rem 0 0 0;
    font-weight: bolder;
`;
