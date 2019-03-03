import React from 'react';
import { getAll } from '../../services/post';

export default class FetchPost extends React.Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    getAll(({ data }) => {
      this.setState({
        posts: data,
        loading: false,
      });
    });
  };

  render() {
    const { children } = this.props;
    const { loading, posts } = this.state;
    return children({ loading, posts, fetch: this.fetch });
  }
}
