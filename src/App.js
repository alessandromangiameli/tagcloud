import React, { Component } from 'react';
import Form from './app/Form';
import TagCloud from './app/TagCloud';

import Layout from './app/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <TagCloud />
        <Form />
      </Layout>
    );
  }
}

export default App;
