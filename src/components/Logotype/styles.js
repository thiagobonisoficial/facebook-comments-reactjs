import styled from 'styled-components';

const Img = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt,
}))`
    width: auto;
    height: 2rem;
`;

export default Img;
