import styled from 'styled-components';

const Avatar = styled.img`
    width: ${({ theme }) => theme.width};
    height: ${({ theme }) => theme.height};
    border: ${({ theme }) => theme.border};
    border-radius: 50%;
    object-fit: cover;
`;

export default Avatar;
