import React from 'react';
import Header from '../Header/Header';
import Section from './Section';

export const HeaderWrapper = () => (
  <Section
    maxWidth='50%'
    padding='20px'
    background='blue'
    shadow='6px 6px 16px 0px rgba(34, 81, 122, 0.48), -6px -2px 16px 0px rgba(119, 41, 41, 0.8)'
  >
    <Header>Trying the wrapper out</Header>
  </Section>
);

export default {
  title: 'Section',
  component: Section,
};
