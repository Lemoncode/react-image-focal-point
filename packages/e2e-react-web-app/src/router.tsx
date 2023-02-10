import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Basic, BasicWithMargin, BasicWithScroll } from './pages';

const routes = {
  root: '/',
  basic: '/basic',
  basicWithMargin: '/basic-with-margin',
  basicWithScroll: '/basic-with-scroll',
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.root} element={<Basic />} />
      <Route path={routes.basic} element={<Basic />} />
      <Route path={routes.basicWithMargin} element={<BasicWithMargin />} />
      <Route path={routes.basicWithScroll} element={<BasicWithScroll />} />
    </>
  )
);
