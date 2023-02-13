import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';
import classes from './styled.module.css';

const IMAGE_URL = 'landscape.jpg';

export const Styled = () => {
  return (
    <ImageFocalPoint
      classes={{ root: classes.imageFocalPoint, image: classes.image, focalPoint: classes.focalPoint }}
      src={IMAGE_URL}
      onChange={console.log}
    />
  );
};
