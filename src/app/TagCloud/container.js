import React from 'react';

import PostContext from '../PostContext';
import TagCloudComponent from './component';

const wordCount = (posts) => {
  const lookupTable = {};
  posts.forEach(({ body }) => {
    body.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/).forEach((word) => {
      word = word.toLowerCase();
      lookupTable[word] = lookupTable[word] + 1 || 1;
    });
  });
  return Object.keys(lookupTable).map((key) => {
    return {
      word: key,
      count: lookupTable[key],
    };
  });
};

const TagCloudContainer = () => {
  return (
    <PostContext.Consumer>
      {({ posts, loading }) => {
        if (loading) {
          return null;
        }
        return <TagCloudComponent posts={wordCount(posts)} />;
      }}
    </PostContext.Consumer>
  );
};

export default TagCloudContainer;
