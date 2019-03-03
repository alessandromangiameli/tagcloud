import React, { Component } from 'react';
import Form from './app/Form';
import TagCloud from './app/TagCloud';
import FetchPost from './app/FetchPost';

import Layout from './app/Layout';

import PostContext from './app/PostContext';

class App extends Component {
  render() {
    return (
      <Layout>
        <FetchPost>
          {({ posts, loading, fetch }) => (
            <PostContext.Provider
              value={{
                posts,
                loading,
                fetch,
              }}
            >
              <TagCloud />
              <Form />
            </PostContext.Provider>
          )}
        </FetchPost>
      </Layout>
    );
  }
}

export default App;
