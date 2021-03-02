import React from 'react';

import { Button } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

import { Card } from '@/components/Card';
import { Input } from '@/components/Input';

export const ApplicationForm = () => {
  const form = useForm();

  const handleSubmit = (values) => console.log({ values });

  return (
    <Card>
      <Formiz connect={form} onSubmit={handleSubmit}>
        <form noValidate onSubmit={form.submit}>
          <Input name="firstname" />
          <Button type="submit" colorScheme="green" mt={3}>
            Submit
          </Button>
        </form>
      </Formiz>
    </Card>
  );
};
