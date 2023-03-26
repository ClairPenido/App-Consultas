/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { VStack, Heading, Center, Text, ScrollView, Box } from 'native-base';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Context } from '../context/Provider';
import { Button } from '../components/Button';

export function Devolucao() {
  const { catchUser } = useContext(Context);

  return (
    <ScrollView marginY={5}>
      <Center w="100%" h="100%">
        <Box safeArea px="5" py="5" w="100%" maxW="340" minH="620" bgColor="white" borderRadius={8}>
          <Heading
            py={5}
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            textAlign="center"
            _dark={{
              color: 'warmGray.50',
            }}
          >
            Devolução
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
          </VStack>
          <VStack>
            <Heading
              pt={5}
              pb={3}
              size="md"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            >
              Itens para Devolução:
            </Heading>
            <DataTable style={styles.table}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={styles.title}>Código</DataTable.Title>
                <DataTable.Title style={[styles.title, { flexGrow: 2 }]}>Descrição</DataTable.Title>
                <DataTable.Title style={styles.title}>Valor</DataTable.Title>
              </DataTable.Header>
              {catchUser[0].devolução.map((elem, index) => (
                <DataTable.Row keys={index} style={styles.tableRow}>
                  <DataTable.Cell style={styles.cell}>{elem.cod}</DataTable.Cell>
                  <DataTable.Cell style={[styles.cell, { flexGrow: 2 }]}>
                    {elem.descricaoProduto}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.cell}>R$ {elem.valorItem}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
            <Button mt={5} title="Devolver" />
          </VStack>
          <StatusBar style="auto" />
        </Box>
      </Center>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
  },
  tableHeader: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRow: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    justifyContent: 'center',
    borderColor: '#ddd',
  },
  title: {
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
