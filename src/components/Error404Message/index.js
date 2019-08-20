import React from 'react';

import { Img, Title, Subtitle } from './styles';
import Error404GIF from 'assets/images/gifs/error404.gif';

export default function Error404Message() {
    return (
        <>
            <Img src={Error404GIF} alt="Error404 GIF" />
            <Title>SORRY</Title>
            <Subtitle>this page cannot be found</Subtitle>
        </>
    );
}
