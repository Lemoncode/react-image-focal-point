import React from 'react';
import Layout from '@theme/Layout';
import { Header } from '@site/src/components';

const Home: React.FC = () => {
  return (
    <Layout description="React Image Focal Point provides a simple way to center a cropped image on a specific point.">
      <Header />
      <main style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flex: 1 }}>
        <p
          style={{
            alignSelf: 'center',
          }}
          className="hero__subtitle"
        >
          Video tutorial comming soon
        </p>
      </main>
    </Layout>
  );
};

export default Home;
