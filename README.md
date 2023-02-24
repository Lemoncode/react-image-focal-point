<div align="center">
  <h1>React Image Focal Point</h1>
  <a href="https://lemoncode.github.io/react-image-focal-point">
    <img
      height="100"
      width="100"
      alt="logo"
      src="https://raw.githubusercontent.com/lemoncode/react-image-focal-point/develop/website/static/img/logo.svg"
    />
  </a>
  <p>You can just drag and drop a focal point button on top of your image and enhance your cropped images.</p>

  <br/>

  <h2>Live Demo</h2>
  <br/>
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
    alt="Edit on Codesandbox"
    title="Edit on Codesandbox"
    height="36"
    />
  </a>

<br />

<hr />

<br />

Video tutorial comming soon

<br />

</div>

<hr />


<!-- https://github.com/badges/shields -->

![npm](https://img.shields.io/npm/v/@lemoncode/react-image-focal-point?style=plastic) ![npm bundle size](https://img.shields.io/bundlephobia/min/@lemoncode/react-image-focal-point?style=plastic) ![npm downloads](https://img.shields.io/npm/dw/@lemoncode/react-image-focal-point?style=plastic) ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/lemoncode/react-image-focal-point/ci.yml?branch=develop&style=plastic)

![GitHub license](https://img.shields.io/github/license/lemoncode/react-image-focal-point?style=plastic)  ![GitHub issues](https://img.shields.io/github/issues/lemoncode/react-image-focal-point?style=plastic) ![GitHub pull requests](https://img.shields.io/github/issues-pr/lemoncode/react-image-focal-point?style=plastic) ![GitHub last commit](https://img.shields.io/github/last-commit/lemoncode/react-image-focal-point?style=plastic)

![GitHub stars](https://img.shields.io/github/stars/lemoncode/react-image-focal-point?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/lemoncode/react-image-focal-point?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/lemoncoders?style=social)

## Table of Contents

- [Installation](#installation)
- [Quickstart](#quickstart)
- [Docs](#docs)
- [Examples](#examples)
- [Key Features](#key-features)

## Installation

Install _React Image Focal Point_ using your favorite package manager like [npm](https://www.npmjs.com/):

```bash
npm install @lemoncode/react-image-focal-point

```

or via [yarn](https://classic.yarnpkg.com/lang/en/):

```bash
yarn add @lemoncode/react-image-focal-point

```

This library has `peerDependencies` listings for `react` and `react-dom`. You will need to install these packages in your project in order to use this library.

## Quickstart

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

## Docs

Check out our official [documentation](https://lemoncode.github.io/react-image-focal-point)

## Examples

You'll find runnable examples in the [docs site](https://lemoncode.github.io/react-image-focal-point/docs/examples/basic) and in the [examples folder](https://github.com/Lemoncode/react-image-focal-point/tree/main/examples).

## Key Features

- You can just drag and drop a focal point button on top of your image and enhance your cropped images.

- You can use it as a controlled or uncontrolled component.

- You can style the component at any component's level (check out the [docs site CSS section](https://lemoncode.github.io/react-image-focal-point/docs/api/image-focal-point#classesprops)).

# About Lemoncode + Basefactor

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
