import React from 'react';
import WordCloud from 'react-d3-cloud';

import FetchPost from '../FetchPost';

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
      text: key,
      value: lookupTable[key],
    };
  });
};

const fontSizeMapper = (word) => Math.log2(word.value) * 5 * 10;
const rotate = (word) => word.value % 360;

const TagCloudContainer = () => {
  return (
    <FetchPost>
      {({ posts, loading }) => {
        if (loading) {
          return 'loading';
        }
        return (
          <WordCloud
            data={wordCount(posts)}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            font="Helvetica Neue"
          />
        );
      }}
    </FetchPost>
  );
};

export default TagCloudContainer;
