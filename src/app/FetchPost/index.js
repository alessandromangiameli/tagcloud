import React from 'react';
import { get } from '../../services/cache';

export default class FetchPost extends React.Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const onFetch = ({ data }) => {
      this.setState({
        posts: data,
        loading: false,
      });
    };

    get({
      done: onFetch,
    });
  };

  render() {
    const { children } = this.props;
    const { loading, posts } = this.state;
    return children({ loading, posts, fetch: this.fetch });
  }
}
