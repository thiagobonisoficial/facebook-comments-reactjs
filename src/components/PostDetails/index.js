import React from 'react';
import PropTypes from 'prop-types';

import { Container, DetailsContainer, Username, Date } from './styles';
import { UserAvatar } from 'components';

function PostDetails({ userAvatar, username, date }) {
    return (
        <Container>
            <UserAvatar
                src={userAvatar}
                alt={`${username} Avatar`}
                theme="first"
            />
            <DetailsContainer>
                <Username>{username}</Username>
                <Date>{date}</Date>
            </DetailsContainer>
        </Container>
    );
}

PostDetails.propTypes = {
    userAvatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default PostDetails;
