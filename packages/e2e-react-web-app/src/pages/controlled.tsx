import React from 'react';
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint, FocalPoint } from '@lemoncode/react-image-focal-point';

const IMAGE_URL = 'landscape.jpg';

export const Controlled = () => {
  const [focalPoint, setFocalPoint] = React.useState<FocalPoint>({ x: 5, y: 10 });
  return <ImageFocalPoint src={IMAGE_URL} focalPoint={focalPoint} onChange={setFocalPoint} />;
};
