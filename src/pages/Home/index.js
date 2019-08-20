import React, { Component } from 'react';

import GlobalStyle from 'styles/Global';
import { LoadingSection, PostSection } from './styles';
import { LoadingSpinner, Header, PostList } from 'components';

import FirstUserAvatar from 'assets/images/avatars/thiagodebonis.jpg';

export default class Home extends Component {
    state = {
        loading: true,
        userDetailsData: {
            userAvatar: FirstUserAvatar,
            username: 'Thiago De Bonis',
        },
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    renderLoading = () => {
        return (
            <LoadingSection>
                <LoadingSpinner />
            </LoadingSection>
        );
    };

    renderPosts = () => {
        return (
            <PostSection>
                <PostList />
            </PostSection>
        );
    };

    render() {
        return (
            <>
                <GlobalStyle />
                <Header data={this.state.userDetailsData} />

                {this.state.loading ? this.renderLoading() : this.renderPosts()}
            </>
        );
    }
}
