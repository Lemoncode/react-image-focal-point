import React from 'react';
import { FocalPoint } from '@lemoncode/react-image-focal-point';
import classes from './playground.module.css';

interface Props {
  src: string;
  focalPoint?: FocalPoint;
  children: React.ReactNode;
}

export const Playground: React.FC<Props> = props => {
  const { src, focalPoint, children } = props;

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Basic</h1>
      <p className={classes.description}>
        This example shows how to use the library with the minimal properties (<i>src</i> and <i>onChange</i>)
      </p>
      <h2 className={classes.focalPointSubtitle}>Image focal point</h2>
      <div className={classes.focalPoint}>{children}</div>

      <h2 className={classes.resultSubtitle}>Example results</h2>
      <div className={classes.result}>
        <img
          src={src}
          className={classes.portraitImage}
          style={{ objectPosition: `${focalPoint?.x}% ${focalPoint?.y}%` }}
        />
        <img
          src={src}
          className={classes.landscapeImage}
          style={{ objectPosition: `${focalPoint?.x}% ${focalPoint?.y}%` }}
        />
        <img
          src={src}
          className={classes.squareImage}
          style={{ objectPosition: `${focalPoint?.x}% ${focalPoint?.y}%` }}
        />
      </div>
    </div>
  );
};
