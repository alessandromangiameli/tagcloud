import React from 'react';

const fontSizeMapper = (value) => Math.log2(value) * 50;
const rotate = (word) => word.value % 360;

const CloudItem = ({ word }) => {
  return <div>{word}</div>;
};

export default CloudItem;
