import React from 'react';

import {
  AspectRatio,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { useField } from '@formiz/core';
import PropTypes from 'prop-types';

export const IdenticalPictures = (props) => {
  const {
    id,
    value,
    valueDebounced,
    setValue,
    isValid,
    isSubmitted,
    errorMessage,
  } = useField(props);
  const { label, required, options } = props;

  const { selectedImages: selectedImagesDebounced } = valueDebounced || {
    selectedImages: [],
  };
  const showError =
    !isValid && (selectedImagesDebounced.length >= 2 || isSubmitted);

  const { selectedImages } = value || { selectedImages: [] };

  const itemsToDisplay = React.useMemo(
    () => [...options, ...options].sort(() => Math.random() - 0.5),
    [JSON.stringify(options)] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleClick = (itemValue, itemIndex) => () => {
    const nextValues = (selectedImages.find((x) => x.index === itemIndex)
      ? selectedImages.filter((x) => x.index !== itemIndex)
      : [
          selectedImages[1] || selectedImages[0],
          { value: itemValue, index: itemIndex },
        ]
    ).filter((x) => !!x);

    const isIdentical =
      !!nextValues[0] &&
      !!nextValues[1] &&
      nextValues[0].value === nextValues[1].value;

    setValue(
      nextValues.length
        ? {
            isIdentical,
            value: isIdentical ? nextValues[0].value : null,
            selectedCount: nextValues.length,
            selectedImages: nextValues,
          }
        : null
    );
  };

  return (
    <FormControl
      id={id}
      isRequired={required}
      isInvalid={showError}
      mb={!showError ? 8 : 0}
    >
      <FormLabel>{label}</FormLabel>
      <SimpleGrid columns={{ base: 3, sm: 6 }} spacing={4}>
        {itemsToDisplay.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <AspectRatio key={index} ratio="1">
            <Button
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              onClick={handleClick(item, index)}
              boxShadow={
                selectedImages.find((x) => x.index === index)
                  ? '0 0 0 0.3rem'
                  : null
              }
              _focus={{
                boxShadow: selectedImages.find((x) => x.index === index)
                  ? '0 0 0 0.3rem'
                  : 'outline',
              }}
              color={
                selectedImages.length < 2 || isValid ? 'blue.500' : 'red.500'
              }
              p={0}
              overflow="hidden"
              opacity={
                selectedImages.length >= 2 &&
                !selectedImages.find((x) => x.index === index)
                  ? 0.6
                  : 1
              }
            >
              <Image
                ignoreFallback
                objectFit="cover"
                src={item}
                alt={`Image ${index}`}
              />
            </Button>
          </AspectRatio>
        ))}
      </SimpleGrid>
      <FormErrorMessage mt={0} h={8}>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

IdenticalPictures.propTypes = {
  label: PropTypes.string,
  required: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

IdenticalPictures.defaultProps = {
  label: '',
  required: null,
  options: [],
};
