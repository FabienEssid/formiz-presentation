import React from 'react';

import { HStack, Heading, Icon } from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export const ContactInformation = (props) => (
  <HStack spacing={8} position="fixed" top={6} right={4} {...props}>
    <Heading color="white" size="md">
      <Icon as={FaGithub} mr={2} />
      @FabienEssid
    </Heading>

    <Heading color="white" size="md">
      <Icon as={FaTwitter} mr={2} />
      @FabienEssid
    </Heading>
  </HStack>
);
