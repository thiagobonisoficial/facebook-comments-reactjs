import React, { Component } from 'react';

import Container from './styles';
import { Post } from 'components';

import FirstUserAvatar from 'assets/images/avatars/thiagodebonis.jpg';
import SecondUserAvatar from 'assets/images/avatars/businesswoman.jpg';
import ThirdUserAvatar from 'assets/images/avatars/stevejobs.jpg';
import FourthUserAvatar from 'assets/images/avatars/lisabrennanjobs.jpg';

class PostList extends Component {
    state = {
        postListData: [
            {
                post: {
                    date: '04 Jun 2019',
                    message:
                        'Thank you so much for coming and reviewing my code in this simple ReactJS project! Thank you very much <3',
                    userAvatar: FirstUserAvatar,
                    username: 'Thiago De Bonis',
                },
                postCommentsData: [
                    {
                        message:
                            'I recognize your value, future and capability, I, your Human Resources Agent, will invest in you.',
                        userAvatar: SecondUserAvatar,
                        username: 'RH',
                    },
                ],
            },
            {
                post: {
                    date: '05 Jun 2019',
                    message:
                        'To be successful, you must truly love what you do. Otherwise, considering only the rational side, you simply give up. This is what happens to most people.',
                    userAvatar: ThirdUserAvatar,
                    username: 'Steve Jobs',
                },
                postCommentsData: [
                    {
                        message:
                            "Wise words, I am very much your fan! Unfortunately we had his demise, a brilliant mind that didn't care about the opinions of others.",
                        userAvatar: FirstUserAvatar,
                        username: 'Thiago De bonis',
                    },
                    {
                        message:
                            'Really @Thiago De Bonis, a brilliant mind, which the world will feel the weight of your loss!',
                        userAvatar: FourthUserAvatar,
                        username: 'Lisa Brennan Jobs',
                    },
                ],
            },
        ],
    };

    render() {
        return (
            <Container>
                {this.state.postListData.map(({ post, postCommentsData }) => {
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
}

export default PostList;
