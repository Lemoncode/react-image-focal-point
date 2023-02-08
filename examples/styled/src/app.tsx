import React from 'react';
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint, FocalPoint } from '@lemoncode/react-image-focal-point';
import { Playground } from './playground';
import './app.css';

const IMAGE_URL = 'landscape.jpg';

export const App = () => {
  const [focalPoint, setFocalPoint] = React.useState<FocalPoint>();

  return (
    <Playground src={IMAGE_URL} focalPoint={focalPoint}>
      <ImageFocalPoint
        classes={{ root: 'image-focal-point', image: 'image', focalPoint: 'focal-point' }}
        src={IMAGE_URL}
        onChange={setFocalPoint}
      />
    </Playground>
  );
};
