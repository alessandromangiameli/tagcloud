import React from 'react';

import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

import CloudItem from './CloudItem';

const styles = {
  fontFamily: 'Lato',
  fontSize: 30,
  fontWeight: 500,
  color: () =>
    randomColor({
      hue: 'red',
    }),
  padding: 5,
};

export default class TagCloudComponent extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    const { posts } = this.props;
    return (
      <section id="parole">
        <div className="tag-cloud-container">
          <div className="app-outer">
            <div className="app-inner">
              <TagCloud className="tag-cloud" style={styles}>
                {posts.map(({ word, count }, index) => (
                  <CloudItem word={word} count={count} key={index} />
                ))}
              </TagCloud>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
