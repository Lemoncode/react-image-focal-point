import React from 'react';
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint, FocalPoint } from '@lemoncode/react-image-focal-point';
import classes from './with-scroll.module.css';

const IMAGE_URL = 'landscape.jpg';

export const ControlledWithScroll = () => {
  const [focalPoint, setFocalPoint] = React.useState<FocalPoint>({ x: 5, y: 10 });
  return (
    <div className={classes.root}>
      <ImageFocalPoint src={IMAGE_URL} focalPoint={focalPoint} onChange={setFocalPoint} />
    </div>
  );
};
