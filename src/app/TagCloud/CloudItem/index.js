import React from 'react';

// const styles = {
//   large: {
//     fontSize: 60,
//     fontWeight: 'bold',
//   },
//   small: {
//     opacity: 0.7,
//     fontSize: 16,
//   },
// };

const CloudItem = (props) => {
  return (
    <div {...props} className="tag-item-wrapper">
      <div
        style={{
          fontSize: props.count * 20,
        }}
      >
        {props.word}
      </div>
    </div>
  );
};

export default CloudItem;
