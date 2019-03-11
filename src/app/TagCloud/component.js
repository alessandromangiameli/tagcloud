import React from 'react';

import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

import CloudItem from './CloudItem';

const styles = {
  fontFamily: 'Lato',
  fontSize: 10,
  fontWeight: 500,
  color: () =>
    randomColor({
      hue: 'red',
    }),
  padding: 10,
};

const fontSizeMapper = (value) => Math.log2(value) * 50;

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
              <TagCloud
                className="tag-cloud"
                style={styles}
                //rotate={() => Math.round(Math.random()) * 20}
              >
                {posts.map(({ word, count }, index) => (
                  <div
                    style={{
                      fontSize: fontSizeMapper(count),
                    }}
                    key={index}
                  >
                    {word}
                  </div>
                ))}
              </TagCloud>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
