/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { VStack, Heading, Center, Container, Text, Box, Select, CheckIcon } from 'native-base';
import React, { useState, useContext } from 'react';
import { Input } from '../components/Input';
import { Context } from '../context/Provider';
import { Button } from '../components/Button';

export function Saque() {
  const { catchUser } = useContext(Context);
  const [selected, setSelected] = useState("");

  return (
    <VStack bgColor="gray.300" flex={1} px={10} >
      <Center>
        <Heading my={5}>
          Solicitação de Saque
        </Heading>
        <Container
          borderWidth={1}
          borderRadius={5}
          minW={350}
          width="100%"
          marginBottom={5}
          paddingY={3}
          paddingX={5}
        >
          <Text mt="3" fontWeight="medium">
            Nome: {catchUser[0].nomeFornecedor}
          </Text>
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
        </Container>
        <Container
          borderWidth={1}
          borderRadius={5}
          minW={350}
          width="100%"
          marginBottom={5}
          paddingY={3}
          paddingX={5}
        >
          <Heading>
            Dados da utilização do Crédito
          </Heading>
          <Box
            marginTop={5}
            borderWidth={1}
            borderRadius={5}
            width="100%"
          >
            <Select selectedValue={selected} minWidth="250"
              accessibilityLabel="modo de pagamento" placeholder="Escolha o modo de pagamento"
              placeholderTextColor="black"
              onValueChange={itemValue => setSelected(itemValue)}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
              }}
            >
              <Select.Item label="Dinheiro" value="money" />
              <Select.Item label="Transferencia" value="pix" />
            </Select>
          </Box>
          <Input
            mt={5}
            name="cash"
            placeholder="Insira o valor"
            minWidth={250}
          />
          <Button title='Confirmar' />
        </Container>

      </Center>
      <StatusBar style="auto" />
    </VStack>
  );
}
