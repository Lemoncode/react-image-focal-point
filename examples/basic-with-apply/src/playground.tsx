import React from 'react';
import { FocalPoint } from '@lemoncode/react-image-focal-point';
import classes from './playground.module.css';

interface Props {
  src: string;
  focalPoint?: FocalPoint;
  children: React.ReactNode;
}

export const Playground: React.FC<Props> = props => {
  const { src, children } = props;
  const [focalPoint, setFocalPoint] = React.useState<FocalPoint>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.focalPoint) {
      setFocalPoint(props.focalPoint);
    }
  };

  return (
    <div className={classes.root}>
    <h2 className={classes.focalPointSubtitle}>Image focal point</h2>
      <form className={classes.focalPoint} onSubmit={handleSubmit}>
        {children}
        <button className={classes.submitButton} type="submit">
          Apply
        </button>
      </form>

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
