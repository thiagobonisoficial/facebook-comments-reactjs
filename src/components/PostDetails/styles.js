import styled from 'styled-components';

import Colors from 'styles/Colors';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
`;

export const DetailsContainer = styled(Container)`
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

export const Username = styled.span`
    font-weight: bold;
    color: ${Colors.greys.dark2};
`;

export const Date = styled.span`
    margin: 0.3rem 0 0 0.2rem;
    font-size: 0.9rem;
    color: ${Colors.greys.dark2};
`;
