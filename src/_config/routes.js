import React from 'react';
import { Spinner } from 'components/Spinner';
import baseLoadable from '@loadable/component';

const loadable = (func) => baseLoadable(func, { fallback: <Spinner page /> });
const HomePage = loadable(() => import('containers/HomePage'));

export const routes = [
  {
    path: '/',
    exact: true,
    strict: true,
    component: HomePage,
    title: 'Home Page',
    subtitle: 'Example Subtitle',
    isNav: true,
  },
];
