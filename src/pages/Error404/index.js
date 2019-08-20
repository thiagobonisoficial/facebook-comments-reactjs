import React from 'react';

import GlobalStyle from 'styles/Global';
import AnimationSection from './styles';
import { Error404Message, BackHome } from 'components';

export default function Error404() {
    return (
        <>
            <GlobalStyle light />
            <AnimationSection>
                <Error404Message />
                <BackHome />
            </AnimationSection>
        </>
    );
}
