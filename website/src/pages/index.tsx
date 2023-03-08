import React from 'react';
import Layout from '@theme/Layout';
import { Header, Video } from '@site/src/components';
import classes from './index.module.css';

const Home: React.FC = () => {
  return (
    <Layout description="React Image Focal Point provides a simple way to center a cropped image on a specific point.">
      <Header />
      <main className={classes.root}>
        <div className={classes['video-container']}>
          <Video id="29Rr7at3sJY" />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
