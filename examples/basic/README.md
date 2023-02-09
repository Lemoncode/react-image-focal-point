# Basic

This example shows how to use the library with the minimal properties.

## How to use

Import the library styles and the component:

```jsx
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
  return (

  );
}

```

Then use the component:

```diff
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
  return (
+   <ImageFocalPoint
+     src="your-image-src"
+     onChange={(focalPoint) => {
+       // Whatever you want to do when the user clicks on the image
+     }}
+   />
  );
}

```

<a target="_blank" href="https://stackblitz.com/github/Lemoncode/react-image-focal-point/tree/main/examples/basic">
  <img
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    alt="Edit on StackBlitz"
    title="Edit on StackBlitz"
    height="36"
  />
</a> <a target="_blank" href="https://codesandbox.io/s/github/Lemoncode/react-image-focal-point/tree/main/examples/basic">
  <img
    src="https://codesandbox.io/static/img/play-codesandbox.svg"
    alt="Edit on StackBlitz"
    title="Edit on StackBlitz"
    height="36"
    />
  </a>

