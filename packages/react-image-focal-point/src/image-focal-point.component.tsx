import React from 'react';
import clsx from 'clsx';
import { useFocalPoint } from './image-focal-point.hooks';
import classes from './image-focal-point.module.css';
import { FocalPoint } from './image-focal-point.vm';

interface ClassesProps {
  root?: string;
  focalPoint?: string;
  image?: string;
}

interface LabelProps {
  focalPoint?: string;
}

const defaultLabels: LabelProps = {
  focalPoint: 'Focal point',
};

export interface ImageFocalPointProps {
  src: string;
  onChange: (focalPoint: FocalPoint) => void;
  focalPoint?: FocalPoint;
  alt?: string;
  labels?: LabelProps;
  classes?: ClassesProps;
  className?: string;
}

export const ImageFocalPoint: React.FC<ImageFocalPointProps> = props => {
  const { src, onChange, alt, focalPoint } = props;
  const labels = { ...defaultLabels, ...(props.labels || {}) };
  const { ref, x, y, onMove, canMove, setCanMove } = useFocalPoint({ focalPoint, onChange });

  return (
    <div ref={ref} className={clsx(classes.root, props.className, props.classes?.root)} onMouseMove={onMove}>
      <button
        type="button"
        aria-label={labels.focalPoint}
        style={{ left: `${x}%`, top: `${y}%`, cursor: canMove ? 'grabbing' : 'grab' }}
        className={clsx(classes.focalPoint, props?.classes?.focalPoint)}
        onMouseDown={() => setCanMove(true)}
        onMouseUp={() => setCanMove(false)}
      />
      <img
        style={{
          objectPosition: `${x}% ${y}%`,
        }}
        className={clsx(classes.image, props.classes?.image)}
        src={src}
        alt={alt}
      />
    </div>
  );
};
