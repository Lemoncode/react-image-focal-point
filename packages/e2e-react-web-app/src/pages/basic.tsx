import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const IMAGE_URL = 'landscape.jpg';

export const Basic = () => {
  return <ImageFocalPoint src={IMAGE_URL} onChange={console.log} />;
};
