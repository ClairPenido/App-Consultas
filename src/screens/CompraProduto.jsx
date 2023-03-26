/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { VStack, Heading, Center, Box, Text, ScrollView } from 'native-base';
import React, { useContext } from 'react';
import { Input } from '../components/Input';
import { Context } from '../context/Provider';
import { Button } from '../components/Button';

export function CompraProduto() {
  const { catchUser } = useContext(Context);

  return (
    <ScrollView marginY={5}>
      <Center w="100%" h="100%">
        <Box safeArea px="5" py="5" w="90%" maxW="340" minH="620" bgColor="white" borderRadius={8}>
          <Heading
            pb={5}
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          >
            Compra de Produto
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
            <Text mt="3" fontWeight="medium">
              Saldo bloqueado: R$ {catchUser[0].saldoFornecedor.saldoBloqueado}
            </Text>
            <Text mt="3" fontWeight="medium">
              Saldo total: R$ {catchUser[0].saldoFornecedor.saldoTotal}
            </Text>
          </VStack>
          <VStack mt={5} borderRadius={5} backgroundColor="warmGray.200" px="5" pb="5">
            <Heading
              paddingY={5}
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            >
              Dados da utilização do crédito
            </Heading>
            <Input mt={5} name="cash" Label="Valor a ser utilizado:" placeholder="Insira o valor" />
            <Input mt={5} name="notaFiscal" Label="Nota Fiscal:" placeholder="Insira o número" />
            <Button title="Confirmar" />
          </VStack>
          <StatusBar style="auto" />
        </Box>
      </Center>
    </ScrollView>
  );
}
