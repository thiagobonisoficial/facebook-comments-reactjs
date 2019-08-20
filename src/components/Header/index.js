import React from 'react';
import PropTypes from 'prop-types';

import { Logotype, UserDetails } from 'components';
import { Container, LogotypeContainer } from './styles';

function Header({ data: { username, userAvatar } }) {
    return (
        <Container>
            <LogotypeContainer>
                <Logotype />
            </LogotypeContainer>

            <UserDetails username={username} userAvatar={userAvatar} />
        </Container>
    );
}

Header.propTypes = {
    data: PropTypes.shape({
        userAvatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;
