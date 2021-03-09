import React from 'react';

import { Button } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isNotEmptyString } from '@formiz/validations';

import { Card } from '@/components/Card';
import { IdenticalPictures } from '@/components/IdenticalPictures';
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
            validations={[
              {
                rule: (value) => value === form.values?.password,
                message: 'Passwords are not the same',
                deps: [form.values.password],
              },
            ]}
          />

          <IdenticalPictures
            name="robotCheck"
            label="Choose two identicals images if you're not a robot"
            required="You must choose two identicals images"
            options={[
              'https://source.unsplash.com/iDQVmcPFOCI/200x200',
              'https://source.unsplash.com/rCZ44N2lKS0/200x200',
              'https://source.unsplash.com/ja9VHwgcABo/200x200',
              'https://source.unsplash.com/vuMTQj6aQQ0/200x200',
              'https://source.unsplash.com/2EJCSULRwC8/200x200',
              'https://source.unsplash.com/R4WCbazrD1g/200x200',
            ]}
            validations={[
              {
                rule: (value) => (value || {}).selectedCount === 2,
                message: 'You need to select a second image',
              },
              {
                rule: (value) => (value || {}).isIdentical,
                message: 'Images are not identical',
              },
            ]}
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
