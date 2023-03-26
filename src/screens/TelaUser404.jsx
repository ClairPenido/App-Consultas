/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { VStack, Heading, Center } from 'native-base';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/Provider';
import data from '../data/data';

export function TelaUser404() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // if (CPFInput.length) {
    //   const catchInfo = checkCPFInput();
    //   setCatchUser(catchInfo);
    //   navigation.navigate('Compra de Produto');
    // }
    // if (nameInput.length) {
    //   const catchInfo = checkNameInput();
    //   setCatchUser(catchInfo);
    //   navigation.navigate('Compra de Produto');
    // }
  };

  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={24}>Página error</Heading>
      </Center>
      <StatusBar style="auto" />
    </VStack>
  );
}
