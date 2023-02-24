---
'@lemoncode/react-image-focal-point': major
---

Let the user set the picture focal point just by visually dragging and dropping on top of the selected image.

Install _React Image Focal Point_ using your favorite package manager like [npm](https://www.npmjs.com/):

```bash
npm install @lemoncode/react-image-focal-point

```

or via [yarn](https://classic.yarnpkg.com/lang/en/):

```bash
yarn add @lemoncode/react-image-focal-point

```

This library has `peerDependencies` listings for `react` and `react-dom`. You will need to install these packages in your project in order to use this library.

Import the library styles and the component:

```jsx
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
  return (
    // Your app code
  );
};

```

Then use the component:

```jsx
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
  return (
    <ImageFocalPoint
      src="your-image-src" // Same src as <img> HTML element
      onChange={focalPoint => {
        // Add here your code to do whatever you want to when the user drags on the focal point
      }}
    />
  );
};
```

Check out our official [documentation](https://lemoncode.github.io/react-image-focal-point)

You'll find runnable examples in the [docs site](https://lemoncode.github.io/react-image-focal-point/docs/examples/basic) and in the [examples folder](https://github.com/Lemoncode/react-image-focal-point/tree/main/examples).
