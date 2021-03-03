import React from 'react';

import { Button, HStack } from '@chakra-ui/react';
import { Formiz, FormizStep, useForm } from '@formiz/core';
import { isMinNumber, isNotEmptyString } from '@formiz/validations';

import { Card } from '@/components/Card';
import { Checkbox } from '@/components/Checkbox';
import { IdenticalPictures } from '@/components/IdenticalPictures';
import { Input } from '@/components/Input';

export const ApplicationForm = () => {
  const form = useForm();

  const handleSubmit = (values) => console.log({ values });

  return (
    <Card>
      <Formiz connect={form} onValidSubmit={handleSubmit}>
        <form noValidate onSubmit={form.submitStep}>
          <HStack spacing={4} justify="center" mb={10}>
            {(form.steps || []).map((step) => (
              <Button
                key={step.name}
                colorScheme="green"
                variant={
                  step.name === form.currentStep.name ? 'solid' : 'outline'
                }
                onClick={() => form.goToStep(step.name)}
              >
                {step.isSubmitted && !step.isValid ? '⚠️ ' : null}
                {step.label}
              </Button>
            ))}
          </HStack>

          <FormizStep name="step-1" label="Informations générales">
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
              name="age"
              label="Age"
              required="Age is required"
              validations={[
                {
                  rule: isMinNumber(0),
                  message: 'Age has to be a positive number',
                },
              ]}
            />

            <Checkbox
              name="authorization"
              label="Authorization"
              required="You have to check this field"
            >
              Your parents agree to give you access to this application
            </Checkbox>
          </FormizStep>

          <FormizStep name="step-2" label="Mot de passe">
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
          </FormizStep>

          <FormizStep name="step-3" label="Confirmation">
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
          </FormizStep>

          <Button
            type="submit"
            colorScheme="green"
            mt={3}
            disabled={form.isStepSubmitted && !form.isStepValid}
          >
            Submit
          </Button>
        </form>
      </Formiz>
    </Card>
  );
};
