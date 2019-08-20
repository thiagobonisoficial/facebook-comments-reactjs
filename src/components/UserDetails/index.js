import React from 'react';
import PropTypes from 'prop-types';

import { Container, Username } from './styles';
import { UserAvatar } from 'components';

function UserDetails({ username, userAvatar }) {
    return (
        <Container>
            <Username>{username}</Username>
            <UserAvatar
                src={userAvatar}
                alt={`${username} AVATAR`}
                theme="first"
            />
        </Container>
    );
}

UserDetails.propTypes = {
    userAvatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

export default UserDetails;
