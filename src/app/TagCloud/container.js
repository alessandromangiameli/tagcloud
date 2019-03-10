import React from 'react';

import PostContext from '../PostContext';
import TagCloudComponent from './component';

const TagCloudContainer = () => {
  return (
    <PostContext.Consumer>
      {({ posts, loading }) => {
        if (loading) {
          return null;
        }
        return <TagCloudComponent posts={posts.slice(0, 30)} />;
      }}
    </PostContext.Consumer>
  );
};

export default TagCloudContainer;
