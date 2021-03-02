import React from 'react';

import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ExampleInformation = ({ title, children, ...props }) => (
  <Box {...props}>
    <Box width="80vw" mx="auto">
      <Heading mb={4} size="xl" color="white">
        {title}
      </Heading>
      {children}
    </Box>
  </Box>
);

ExampleInformation.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
ExampleInformation.defaultProps = {
  title: '',
  children: null,
};
