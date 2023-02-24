import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';
import classes from './with-margin.module.css';

const IMAGE_URL = 'landscape.jpg';

export const BasicWithMargin = () => {
  return (
    <div className={classes.root}>
      <ImageFocalPoint src={IMAGE_URL} onChange={console.log} />
    </div>
  );
};
