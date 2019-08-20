import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Avatar from './styles';
import Themes from './themes';
import DefaultIMG from 'assets/images/avatars/default.png';

function UserAvatar({ src, alt, theme }) {
    return (
        <ThemeProvider theme={Themes[theme]}>
            <Avatar src={src} alt={alt} />
        </ThemeProvider>
    );
}

UserAvatar.defaultProps = {
    src: DefaultIMG,
    alt: 'Default Avatar',
    theme: 'first',
};

UserAvatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
};

export default UserAvatar;
