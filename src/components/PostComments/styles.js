import styled from 'styled-components';

import Colors from 'styles/Colors';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin: 0 0 1rem 0;
`;

export const CommentContainer = styled.div`
    background-color: ${Colors.greys.light2};
    margin: 0 0 0 1rem;
    padding: 1rem;
    color: ${Colors.greys.dark3};
    border-radius: 30px;
`;

export const Username = styled.span`
    margin: 0 0.4rem 0 0;
    font-weight: bold;
`;
