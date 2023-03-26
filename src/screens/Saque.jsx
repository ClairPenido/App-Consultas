/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { VStack, Heading, Center, Text, Box, Select, CheckIcon, ScrollView } from 'native-base';
import React, { useState, useContext } from 'react';
import { Input } from '../components/Input';
import { Context } from '../context/Provider';
import { Button } from '../components/Button';

export function Saque() {
  const { catchUser } = useContext(Context);
  const [selected, setSelected] = useState('');

  return (
    <ScrollView marginY={5}>
      <Center w="100%" h="100%">
        <Box safeArea px="5" py="5" w="100%" maxW="340" minH="620" bgColor="white" borderRadius={8}>
          <Heading
            pb={5}
            size="lg"
            fontWeight="600"
            textAlign="center"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          >
            Solicitação de Saque
          </Heading>
          <VStack borderRadius={5} backgroundColor="warmGray.200" px="5" py="5">
            <Text fontWeight="medium">Nome: {catchUser[0].nomeFornecedor}</Text>
            <Text mt="3" fontWeight="medium">
              Contrato: {catchUser[0].numeroContrato}
            </Text>
            <Text mt="3" fontWeight="medium">
              Telefone: {catchUser[0].telefoneFornecedor}
            </Text>
            <Text mt="3" fontWeight="medium">
              Cpf: {catchUser[0].cpfCnpjFornecedor}
            </Text>
            <Text mt="3" fontWeight="medium">
              Saldo disponível: R$ {catchUser[0].saldoFornecedor.saldoDisponivel}
            </Text>
          </VStack>
          <Heading
            paddingY={5}
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          >
            Dados da Utilização do Crédito
          </Heading>
          <VStack borderWidth={1} borderRadius={5} width="100%">
            <Select
              selectedValue={selected}
              minWidth="250"
              accessibilityLabel="modo de pagamento"
              placeholder="Escolha o modo de pagamento"
              placeholderTextColor="black"
              onValueChange={(itemValue) => setSelected(itemValue)}
              _selectedItem={{
                bg: 'yellow.500',
                endIcon: <CheckIcon size="5" />,
              }}
            >
              <Select.Item label="Dinheiro" value="money" />
              <Select.Item label="Transferencia" value="pix" />
            </Select>
          </VStack>
          <Input
            mt={5}
            keyboardType="numeric"
            name="cash"
            placeholder="Insira o valor"
            minWidth={250}
          />
          <Button title="Confirmar" />
        </Box>
        <StatusBar style="auto" />
      </Center>
    </ScrollView>
  );
}
