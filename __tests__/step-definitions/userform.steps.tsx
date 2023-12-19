import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import UserForm from '../../src/components/UserForm';
import Button from '@mui/material/Button';

const feature = loadFeature('./__tests__/features/userform.feature');

defineFeature(feature, (test) => {
  let formWrapper: ShallowWrapper;
  let submitResult: boolean;

  beforeEach(() => {
    formWrapper = shallow(<UserForm />);
    submitResult = false;
  });

  test('User submits the form with invalid data', ({ given, when, then }) => {
    given('the user is on the registration form page', () => {
      // No additional setup needed for this scenario
    });

    when('the user submits the form with invalid data:', (dataTable) => {
      const data = dataTable[0];
      formWrapper.find({ name: 'firstName' }).simulate('change', {
        target: { name: 'firstName', value: data['Value'] },
      });
      formWrapper.find({  id: '#submitBtn' }).simulate('click');
    });

    then('the form should display an error message for the First Name field', () => {
      expect(formWrapper.find({ name: 'firstName' }).prop('error')).toBeTruthy();
      expect(formWrapper.find({ name: 'firstName' }).prop('helperText')).toEqual('First Name is required');
    });
  });


  test('User submits the form with valid data', ({ given, when, then }) => {
    given('the user is on the registration form page', () => {
      // No additional setup needed for this scenario
    });
 
    when('the user enters valid data:', (dataTable) => {
      // const data = dataTable.hashes()[0];
      const data = dataTable[0];
      formWrapper.find({ name: 'firstName' }).simulate('change', {
        target: { name: 'firstName', value: data['Value'] },
      });
    });

    when('the user submits the form', () => {
      formWrapper.find(Button).simulate('click');
      // formWrapper.find(Button).prop('onClick')();
      // formWrapper.find({ testD: 'submitBtn' }).simulate('click');
    });

    then('the form should be submitted successfully', () => {
      // Add your assertions for a successful form submission
      // expect(submitResult).toBe(true)
      // expect(submitResult).toBeTruthy();
      // For example, you might check if a success message is displayed
      // expect(formWrapper.find({ testID: '#successMessage' }).exists()).toBe(true);
      expect(formWrapper.find({ id: '#submitBtn' }).exists()).toBe(true);
    });
  });
});


