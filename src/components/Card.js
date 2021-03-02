import React from 'react';

import { Box } from '@chakra-ui/react';

export const Card = (props) => (
  <Box
    bg="white"
    borderRadius="md"
    boxShadow="md"
    py={7}
    px={10}
    minH="40vh"
    minW="80vw"
    {...props}
  />
);
