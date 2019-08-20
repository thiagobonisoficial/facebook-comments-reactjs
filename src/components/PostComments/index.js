import React from 'react';
import PropTypes from 'prop-types';

import { Container, CommentContainer, Username } from './styles';
import { UserAvatar } from 'components';

function PostComments({ username, userAvatar, message }) {
    return (
        <Container>
            <div>
                <UserAvatar
                    src={userAvatar}
                    alt={`${username} Avatar`}
                    theme="second"
                />
            </div>
            <CommentContainer>
                <Username>{username}</Username>
                <span>{message}</span>
            </CommentContainer>
        </Container>
    );
}

PostComments.propTypes = {
    username: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default PostComments;
