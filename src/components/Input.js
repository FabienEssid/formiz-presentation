import React from 'react';

import { Input as ChakraUIInput } from '@chakra-ui/react';
import { useField } from '@formiz/core';

export const Input = (props) => {
  const { value, setValue } = useField(props);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <ChakraUIInput
      borderColor="gray.300"
      onChange={handleChange}
      value={value || ''}
      {...props}
    />
  );
};
