import React from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraUIInput,
} from '@chakra-ui/react';
import { useField } from '@formiz/core';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const { id, value, setValue } = useField(props);
  const { label, required } = props;

  const handleChange = (e) => setValue(e.target.value);

  return (
    <FormControl id={id} isRequired={required} isInvalid={false}>
      <FormLabel>{label}</FormLabel>
      <ChakraUIInput
        id={id}
        borderColor="gray.300"
        onChange={handleChange}
        value={value || ''}
        {...props}
      />
      <FormErrorMessage>Error message</FormErrorMessage>
    </FormControl>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  required: PropTypes.string,
};
Input.defaultProps = {
  label: '',
  required: null,
};
