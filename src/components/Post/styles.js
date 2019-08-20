import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';
import Colors from 'styles/Colors';

export const Container = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 1rem 0 1rem 0;
    padding: 1rem 1rem 0 1rem;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 13px 8px ${Colors.blacks.transparent};

    ${Breakpoints.md` width: 90%;`}
    ${Breakpoints.xl` width: 70%;`}
`;

export const Header = styled.header`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    padding: 1rem;

    img {
        margin: 0 1rem 0 0;
    }
`;

export const MessageSection = styled.section`
    width: auto;
    height: auto;
    padding: 0 1.5rem 0 1.5rem;
    color: ${Colors.greys.dark3};
    text-align: justify;
    line-height: 1.8rem;
`;

export const CommentsSection = styled.section`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.5rem auto;
    padding: 1.5rem 0 0 0;
    border-top: 2px ${Colors.greys.light2} solid;
    line-height: 1.8rem;
`;
