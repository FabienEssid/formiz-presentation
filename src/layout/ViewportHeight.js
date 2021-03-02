import React from 'react';

import { Flex } from '@chakra-ui/react';

const updateCssViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

if (typeof window !== 'undefined') {
  updateCssViewportHeight();
  window.addEventListener('resize', () => {
    updateCssViewportHeight();
  });
}

export const ViewportHeight = (props) => (
  <Flex minH="calc(var(--vh, 1vh) * 100)" direction="column" {...props} />
);
