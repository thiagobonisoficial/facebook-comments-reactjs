import React from 'react';

import { Container, Message } from './styles';
import { FaSpinner } from 'react-icons/fa';

export default function LoadingSpinner() {
    return (
        <Container>
            <FaSpinner size={40} />
            <Message>Keep Calm, Fake Loading...</Message>
        </Container>
    );
}
