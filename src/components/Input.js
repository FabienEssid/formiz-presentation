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
  const {
    id,
    value,
    setValue,
    isValid,
    isSubmitted,
    isPristine,
    errorMessage,
  } = useField(props);
  const { label, required } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const showError = !isValid && !isFocused && (!isPristine || isSubmitted);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <FormControl id={id} isRequired={required} isInvalid={showError}>
      <FormLabel>{label}</FormLabel>
      <ChakraUIInput
        id={id}
        borderColor="gray.300"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value || ''}
        {...props}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
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
