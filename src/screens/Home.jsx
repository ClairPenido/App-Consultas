/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { VStack, Heading, Center, Box } from 'native-base';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';
import { Context } from '../context/Provider';

export function Home() {
  const { userInput } = useContext(Context);

  const navigation = useNavigation();

  return (
    <Center w="100%" h="100%">
      <Box safeArea px="5" py="60" w="90%" maxW="340" minH="620" bgColor="white" borderRadius={8}>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="md"
        >
          Olá,
        </Heading>
        <Heading
          size="xl"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          {userInput}!
        </Heading>
        <VStack space={3} mt="20">
          <Button
            mb="10"
            title="Compra de Produto"
            onPress={() => navigation.navigate('Tela de Consulta Compra')}
          />
          <Button
            mb="10"
            title="Solicitação de Saque"
            onPress={() => navigation.navigate('Tela de Consulta Saque')}
          />
          <Button
            title="Devolução"
            onPress={() => {
              navigation.navigate('Tela de Consulta Devolução');
            }}
          />
          <StatusBar style="auto" />
        </VStack>
      </Box>
    </Center>
  );
}
