import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';
import styledClasses from './styled.module.css';
import classes from './with-scroll.module.css';

const IMAGE_URL = 'landscape.jpg';

export const StyledWithScroll = () => {
  return (
    <div className={classes.root}>
      <ImageFocalPoint
        classes={{
          root: styledClasses.imageFocalPoint,
          image: styledClasses.image,
          focalPoint: styledClasses.focalPoint,
        }}
        src={IMAGE_URL}
        onChange={console.log}
      />
    </div>
  );
};
