/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { VStack, Heading, Center, Container, Text } from 'native-base';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Context } from '../context/Provider';

export function Devolucao() {
  const { catchUser } = useContext(Context);

  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={24}>Devolução</Heading>
        <Container style={styles.container}>
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
        </Container>
        <Container style={styles.container}>
          <Text mt="3" fontWeight="medium">
            {' '}
            Itens para devolução:
          </Text>
          <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={styles.text}>Código</DataTable.Title>
              <DataTable.Title style={styles.text}>Descrição</DataTable.Title>
              <DataTable.Title style={styles.text}>Valor</DataTable.Title>
            </DataTable.Header>
            {catchUser[0].devolução.map((elem, index) => (
              <DataTable.Row style={styles.tableRow}>
                <DataTable.Cell>{elem.cod}</DataTable.Cell>
                <DataTable.Cell>{elem.descricaoProduto}</DataTable.Cell>
                <DataTable.Cell>R$ {elem.valorItem}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Container>
      </Center>
      <StatusBar style="auto" />
    </VStack>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: 400,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  tableHeader: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tableRow: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
