import React from 'react';
import { onMove } from './image-focal-point.helpers';
import { FocalPoint } from './image-focal-point.vm';

interface Props {
  focalPoint?: FocalPoint;
  onChange: (focalPoint: FocalPoint) => void;
}

const DEFAULT_PERCENTAGE = 50;

export const useFocalPoint = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [x, setX] = React.useState<number>(props.focalPoint?.x ?? DEFAULT_PERCENTAGE);
  const [y, setY] = React.useState<number>(props.focalPoint?.y ?? DEFAULT_PERCENTAGE);
  const [canMove, setCanMove] = React.useState(false);

  return {
    ref,
    x,
    y,
    onMove: onMove({
      setX,
      setY,
      container: ref.current!,
      onChange: (x, y) => props.onChange({ x, y }),
      canMove,
    }),
    canMove,
    setCanMove,
  };
};
