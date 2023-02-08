# Styled

This example shows how to provide styles to the image focal point component.

## How to use

Import the library styles and the component. Use it with minimal properties:

```jsx
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';

const App = () => {
  return (
    <ImageFocalPoint
       src="your-image-src"
       onClick={(newFocalPoint) => {
         // Whatever you want to do when the user clicks on the image
       }}
     />
  );
}

```

Create a css file and provide some styles to the root component:

_app.css_

```css
.image-focal-point {
  width: 500px;
  height: 500px;
}

```

Use it:

```diff
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';
+ import './app.css';

const App = () => {
  return (
    <ImageFocalPoint
+      className="image-focal-point"
       src="your-image-src"
       onClick={(newFocalPoint) => {
         // Whatever you want to do when the user clicks on the image
       }}
     />
  );
}

```

You can also provide styles to the image and the focal point:

_app.css_

```diff
.image-focal-point {
  width: 500px;
  height: 500px;
}

+ .image {
+   border-radius: 10px;
+ }

+ .focal-point {
+   background-color: rgba(255, 0, 0, 0.4);
+ }

```

Use it:

```diff
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint } from '@lemoncode/react-image-focal-point';
import './app.css';

const App = () => {
  return (
    <ImageFocalPoint
-      className="image-focal-point"
+      classes={{
+        root: 'image-focal-point',
+        image: 'image',
+        focalPoint: 'focal-point',
+      }}
       src="your-image-src"
       onClick={(newFocalPoint) => {
         // Whatever you want to do when the user clicks on the image
       }}
     />
  );
}

```

> Note: You can also provide the root styles directly to the classes object instead of using the className prop.

<a target="_blank" href="https://stackblitz.com/github/Lemoncode/react-image-focal-point/tree/main/examples/styled">
  <img
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    alt="Edit on StackBlitz"
    title="Edit on StackBlitz"
    height="36"
  />
</a> <a target="_blank" href="https://codesandbox.io/s/github/Lemoncode/react-image-focal-point/tree/main/examples/styled">
  <img
    src="https://codesandbox.io/static/img/play-codesandbox.svg"
    alt="Edit on StackBlitz"
    title="Edit on StackBlitz"
    height="36"
    />
  </a>

