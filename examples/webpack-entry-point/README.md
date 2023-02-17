# Webpack entry point

This example is the same as the [basic example](https://github.com/Lemoncode/react-image-focal-point/tree/main/examples/basic), but using the webpack entry point to import the library styles.

## How to apply this feature in your code

Import the library component in your _app_:

```jsx
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
  return (
    <ImageFocalPoint
      src="your-image-src"
      onChange={newFocalPoint => {
        // Whatever you want to do when the user clicks on the image
      }}
    />
  );
};
```

Import the library styles in your webpack entry point:

```diff

module.exports = {
  // ...
  entry: {
    index: './index.tsx',
+   vendorStyles: ['@lemoncode/react-image-focal-point/style.css'],
  },
  // ...
}

```

<a target="_blank" href="https://stackblitz.com/github/Lemoncode/react-image-focal-point/tree/main/examples/webpack-entry-point">
  <img
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    alt="Edit on StackBlitz"
    title="Edit on StackBlitz"
    height="36"
  />
</a> <a target="_blank" href="https://codesandbox.io/s/github/Lemoncode/react-image-focal-point/tree/main/examples/webpack-entry-point">
  <img
    src="https://codesandbox.io/static/img/play-codesandbox.svg"
    alt="Edit on Codesandbox"
    title="Edit on Codesandbox"
    height="36"
    />
  </a>
