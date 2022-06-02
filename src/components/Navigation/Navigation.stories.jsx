import React from 'react';
import Navigation from './Navigation';

const sampleLinks = [
  { link: '/', title: 'about' },
  { link: '/', title: 'home' },
  { link: '/', title: 'login' },
  { link: '/', title: 'register' },
];

export const SampleNav = () => <Navigation navLinks={sampleLinks} />;

export default {
  title: 'Navigation',
  component: Navigation,
};
