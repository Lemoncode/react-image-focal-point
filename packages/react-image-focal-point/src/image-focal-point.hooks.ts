import React from 'react';
import { onMove } from './image-focal-point.helpers';

interface Props {
  x?: number;
  y?: number;
  onChange: (x: number, y: number) => void;
}

const DEFAULT_PERCENTAGE = 50;

export const useFocalPoint = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const boundingRectangle = React.useRef<DOMRect | null>(null);
  const [x, setX] = React.useState<number>(props.x ?? DEFAULT_PERCENTAGE);
  const [y, setY] = React.useState<number>(props.y ?? DEFAULT_PERCENTAGE);
  const [canMove, setCanMove] = React.useState(false);

  React.useEffect(() => {
    if (ref.current) {
      boundingRectangle.current = ref.current.getBoundingClientRect();
    }
  }, [ref]);

  return {
    ref,
    x,
    y,
    onMove: onMove({
      setX,
      setY,
      boundingRectangle: boundingRectangle.current!,
      onChange: props.onChange,
      canMove,
    }),
    canMove,
    setCanMove,
  };
};
