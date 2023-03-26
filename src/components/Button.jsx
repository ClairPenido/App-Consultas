/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Button as NButton, Text } from 'native-base'; // renomeado p/ não conflitar com o do native

export function Button({ title, ...props }) {
  return (
    <NButton
      bg="#F8B51E"
      fontSize="md"
      minW={40} // largura
      h={16} // altura
      borderColor="black"
      borderRadius={5}
      borderWidth={1}
      {...props}
      _pressed={{
        bg: 'yellow.800',
      }}
    >
      <Text color="black" fontSize="md">
        {title}
      </Text>
    </NButton>
  );
}
