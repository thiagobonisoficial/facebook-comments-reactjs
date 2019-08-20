import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';
import { Post } from 'components';

function PostList({ data }) {
    return (
        <Container>
            {data.map(({ post, postCommentsData }) => {
                return (
                    <Post
                        key={post.username}
                        post={post}
                        postCommentsData={postCommentsData}
                    />
                );
            })}
        </Container>
    );
}

PostList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
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
        }).isRequired
    ).isRequired,
};

export default PostList;
