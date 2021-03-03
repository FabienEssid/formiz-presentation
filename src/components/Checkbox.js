import React from 'react';

import {
  Checkbox as ChakraUICheckbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { useField } from '@formiz/core';
import PropTypes from 'prop-types';

export const Checkbox = (props) => {
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

  const handleChange = (e) => setValue(e.target.checked);

  return (
    <FormControl
      id={id}
      isRequired={required}
      isInvalid={showError}
      mb={!showError ? 8 : 0}
    >
      <FormLabel>{label}</FormLabel>
      <ChakraUICheckbox
        id={id}
        colorScheme="green"
        borderColor="gray.300"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value || false}
        {...props}
      />
      <FormErrorMessage mt={0} h={8}>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  required: PropTypes.string,
};
Checkbox.defaultProps = {
  label: '',
  required: null,
};
