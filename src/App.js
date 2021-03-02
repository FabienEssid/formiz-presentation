import React from 'react';

import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

import { ContactInformation } from '@/layout/ContactInformation';
import { ExampleInformation } from '@/layout/ExampleInformation';
import { ViewportHeight } from '@/layout/ViewportHeight';
import { ApplicationForm } from '@/pages/ApplicationForm';

export const App = () => (
  <ViewportHeight bg="green.400">
    <ExampleInformation mt={6} mb={12} title="Example 02">
      <List>
        <ListItem>
          <ListIcon as={FaCheck} color="white" />
          <Text as="span" color="white" fontSize="xl">
            Add our first validations on our field
          </Text>
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheck} color="white" />
          <Text as="span" color="white" fontSize="xl">
            Display an error if necessary
          </Text>
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheck} color="white" />
          <Text as="span" color="white" fontSize="xl">
            Submit only when the form is valid
          </Text>
        </ListItem>
      </List>
    </ExampleInformation>
    <ContactInformation />
    <Box mb={6} w="80vw" mx="auto" h="100%">
      <ApplicationForm />
    </Box>
  </ViewportHeight>
);
