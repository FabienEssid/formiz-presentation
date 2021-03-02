import React from 'react';

import { Button } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isNotEmptyString } from '@formiz/validations';

import { Card } from '@/components/Card';
import { Input } from '@/components/Input';

export const ApplicationForm = () => {
  const form = useForm();

  const handleSubmit = (values) => console.log({ values });

  return (
    <Card>
      <Formiz connect={form} onValidSubmit={handleSubmit}>
        <form noValidate onSubmit={form.submit}>
          <Input
            name="firstname"
            label="Firstname"
            required="Firstname is required"
            validations={[
              {
                rule: isNotEmptyString(),
                message: 'This field cannot be empty',
              },
            ]}
          />

          <Input
            name="password"
            label="Password"
            required="Password is required"
            validations={[
              {
                rule: isNotEmptyString(),
                message: 'This field cannot be empty',
              },
            ]}
          />

          <Input
            name="passwordConfirmation"
            label="Password confirm"
            required="Password is required"
          />

          <Button
            type="submit"
            colorScheme="green"
            mt={3}
            disabled={form.isSubmitted && !form.isValid}
          >
            Submit
          </Button>
        </form>
      </Formiz>
    </Card>
  );
};
