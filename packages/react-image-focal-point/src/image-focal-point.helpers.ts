interface Props {
  setX: (x: number) => void;
  setY: (y: number) => void;
  boundingRectangle: DOMRect;
  canMove: boolean;
  onChange: (x: number, y: number) => void;
}

const parseToPercentage = (value: number, max: number) => Math.min(Math.max((value * 100) / max, 0), 100);

/**
 * This function is used to handle the mouse down event inside the image focal point
 * container, it takes the mouse position in pixels and parses it to percentages.
 */
export const onMove = (props: Props) => e => {
  if (props.canMove) {
    const event = e as MouseEvent;
    const currentTarget = event.currentTarget as HTMLDivElement;
    const xPixels = event.clientX - props.boundingRectangle.left;
    const yPixels = event.clientY - props.boundingRectangle.top;
    const x = parseToPercentage(xPixels, currentTarget.clientWidth);
    const y = parseToPercentage(yPixels, currentTarget.clientHeight);
    props.setX(x);
    props.setY(y);
    props.onChange(x, y);
  }
};
