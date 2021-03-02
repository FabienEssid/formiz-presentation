import React from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  useTheme,
} from '@chakra-ui/react';
import { useField } from '@formiz/core';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

export const Select = (props) => {
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

  const theme = useTheme();

  const [isFocused, setIsFocused] = React.useState(false);
  const showError = !isValid && !isFocused && (!isPristine || isSubmitted);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (selectedValue) => {
    setValue(selectedValue);
  };

  const selectStyle = {
    control: (provided) => {
      if (showError) {
        const borderColor = theme.colors.red['500'];
        return {
          ...provided,
          borderColor,
          boxShadow: `0 0 0 1px ${borderColor}`,
          '&:hover': { borderColor },
        };
      }

      return provided;
    },
  };

  return (
    <FormControl
      id={id}
      isRequired={required}
      isInvalid={showError}
      mb={!showError ? 8 : 0}
    >
      <FormLabel>{label}</FormLabel>
      <ReactSelect
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value || ''}
        styles={selectStyle}
        placeholder=""
        {...props}
      >
        Select
      </ReactSelect>
      <FormErrorMessage mt={0} h={8}>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  required: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  required: null,
};
