import React from 'react';

import { Center } from '@chakra-ui/react';

import { ContactInformation } from '@/layout/ContactInformation';
import { ViewportHeight } from '@/layout/ViewportHeight';
import { ApplicationForm } from '@/pages/ApplicationForm';

export const App = () => (
  <ViewportHeight bg="green.400">
    <ContactInformation />
    <Center flexGrow={1} h="100%">
      <ApplicationForm />
    </Center>
  </ViewportHeight>
);
