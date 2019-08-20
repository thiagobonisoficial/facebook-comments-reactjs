import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, MessageSection, CommentsSection } from './styles';
import { PostDetails, PostComments } from 'components';

function Post({ post, postCommentsData }) {
    return (
        <Container>
            <Header>
                <PostDetails
                    userAvatar={post.userAvatar}
                    username={post.username}
                    date={post.date}
                />
            </Header>
            <MessageSection>{post.message}</MessageSection>
            <CommentsSection>
                {postCommentsData.map(({ username, userAvatar, message }) => {
                    return (
                        <PostComments
                            key={username}
                            username={username}
                            userAvatar={userAvatar}
                            message={message}
                        />
                    );
                })}
            </CommentsSection>
        </Container>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        date: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        userAvatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired,
    postCommentsData: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            userAvatar: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default Post;
