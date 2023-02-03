import React from 'react';
import clsx from 'clsx';
import { useFocalPoint } from './image-focal-point.hooks';
import classes from './image-focal-point.module.css';

interface ClassesProps {
  root?: string;
  focalPoint?: string;
  image?: string;
}

interface LabelProps {
  focalPoint?: string;
}

const defaultLabels: LabelProps = {
  focalPoint: 'Punto focal',
};

interface Props {
  src: string;
  onChange: (x: number, y: number) => void;
  x?: number;
  y?: number;
  classes?: ClassesProps;
  className?: string;
  labels?: LabelProps;
}

export const ImageFocalPoint: React.FC<Props> = props => {
  const { src, onChange } = props;
  const labels = { ...defaultLabels, ...(props.labels || {}) };
  const { ref, x, y, onMove, canMove, setCanMove } = useFocalPoint({
    x: props.x,
    y: props.y,
    onChange,
  });

  return (
    <div ref={ref} className={clsx(classes.root, props.className, props.classes?.root)} onMouseMove={onMove}>
      <button
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
      />
    </div>
  );
};
