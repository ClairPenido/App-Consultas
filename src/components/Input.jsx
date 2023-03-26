/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Input as NBInput, FormControl, WarningOutlineIcon, Box } from 'native-base'; // renomeado p/ não conflitar com o do native
// import { HelperText } from 'react-native-paper';

export function Input({ Label, invalid, errorStatus, textHelper, ...props }) {
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <FormControl.Label fontSize={34}>{Label}</FormControl.Label>
      <NBInput
        fontSize="md"
        h={16}
        borderWidth={1}
        borderColor="black"
        borderRadius={5}
        {...props}
        _focus={{
          bg: 'gray.200',
          borderWidth: 1,
          borderColor: 'green.500',
        }}
      />
      {errorStatus ? (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errorStatus}
        </FormControl.ErrorMessage>
      ) : (
        <FormControl.HelperText>{textHelper}</FormControl.HelperText>
      )}
    </FormControl>
  );
}
