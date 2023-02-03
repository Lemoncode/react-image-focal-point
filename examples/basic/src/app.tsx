import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

export const App = () => {
  return (
    <ImageFocalPoint
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      onChange={(x, y) => {
        console.log({ x, y });
      }}
    />
  );
};
