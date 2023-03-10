# Controlled

In this example you can check how to set an initial focal point value (by default it is show centered, but you can override it).

## How to apply this feature in your code

Import the library styles and the component. Use it with minimal properties:

```jsx
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
  return (
    <ImageFocalPoint
      src="your-image-src"
      onChange={newFocalPoint => {
        // Add here your code to do whatever you want to when the user drags on the focal point
      }}
    />
  );
};
```

Create a state to provide the initial focal point values and store the new ones:

```diff
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
+ const [focalPoint, setFocalPoint] = useState({ x: 5, y: 10 });
  return (
    <ImageFocalPoint
       src="your-image-src"
+      focalPoint={focalPoint}
       onChange={(newFocalPoint) => {
+        setFocalPoint(newFocalPoint);
       }}
     />
  );
}

```

<a target="_blank" href="https://stackblitz.com/github/Lemoncode/react-image-focal-point/tree/main/examples/controlled">
  <img
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    alt="Edit on StackBlitz"
    title="Edit on StackBlitz"
    height="36"
  />
</a> <a target="_blank" href="https://codesandbox.io/s/github/Lemoncode/react-image-focal-point/tree/main/examples/controlled">
  <img
    src="https://codesandbox.io/static/img/play-codesandbox.svg"
    alt="Edit on Codesandbox"
    title="Edit on Codesandbox"
    height="36"
    />
  </a>
