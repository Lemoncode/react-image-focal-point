import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import {
  Basic,
  BasicWithMargin,
  BasicWithScroll,
  Controlled,
  ControlledWithMargin,
  ControlledWithScroll,
  Styled,
  StyledWithMargin,
  StyledWithScroll,
} from './pages';

const routes = {
  root: '/',
  basic: '/basic',
  basicWithMargin: '/basic-with-margin',
  basicWithScroll: '/basic-with-scroll',
  controlled: '/controlled',
  controlledWithMargin: '/controlled-with-margin',
  controlledWithScroll: '/controlled-with-scroll',
  styled: '/styled',
  styledWithMargin: '/styled-with-margin',
  styledWithScroll: '/styled-with-scroll',
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.root} element={<Basic />} />
      <Route path={routes.basic} element={<Basic />} />
      <Route path={routes.basicWithMargin} element={<BasicWithMargin />} />
      <Route path={routes.basicWithScroll} element={<BasicWithScroll />} />
      <Route path={routes.controlled} element={<Controlled />} />
      <Route path={routes.controlledWithMargin} element={<ControlledWithMargin />} />
      <Route path={routes.controlledWithScroll} element={<ControlledWithScroll />} />
      <Route path={routes.styled} element={<Styled />} />
      <Route path={routes.styledWithMargin} element={<StyledWithMargin />} />
      <Route path={routes.styledWithScroll} element={<StyledWithScroll />} />
    </>
  )
);
