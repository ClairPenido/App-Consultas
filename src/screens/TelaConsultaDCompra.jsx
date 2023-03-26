/* eslint-disable import/prefer-default-export */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import {
  VStack,
  Heading,
  Center,
  AlertDialog,
  Button as BNS,
  Box,
  ScrollView,
  KeyboardAvoidingView,
} from 'native-base';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Context } from '../context/Provider';
import data from '../data/data';
// import { AlertBox } from '../components/AlertBox';

export function TelaConsultaDCompra() {
  const [CPFInput, setCPFInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const { setCatchUser } = useContext(Context);

  // AlertBox
  const cancelRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);

  const navigation = useNavigation();

  const checkCPFInput = () => {
    const regexCPFCerto = /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;
    const valido = regexCPFCerto.test(CPFInput);
    const dataArray = data.data;
    if (valido) {
      const infoUser = dataArray.filter((elem) => elem.cpfCnpjFornecedor.includes(CPFInput));
      return infoUser;
      // testa a quantidade de caracteres e, se certo, transforma os numeros em cpf formatado
    }
    if (CPFInput.length >= 11 || CPFInput.length <= 14) {
      const regexTrasformCerto = CPFInput.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4');
      const infoUser = dataArray.filter((elem) =>
        elem.cpfCnpjFornecedor.includes(regexTrasformCerto)
      );
      return infoUser;
    }
    return false;
  };

  const checkNameInput = () => {
    const dataArray = data.data;
    const formataNome = nameInput
      .toLowerCase()
      .replace(/(?:^|\s)(?!da|de|do)\S/g, (l) => l.toUpperCase());
    const infoUser = dataArray.filter((elem) => elem.nomeFornecedor.includes(formataNome));
    return infoUser;
  };

  const handleSubmit = () => {
    if (CPFInput.length) {
      const catchInfo = checkCPFInput();
      if (catchInfo.length !== 0) {
        setCatchUser(catchInfo);
        return navigation.navigate('Compra de Produto');
      }
    }

    if (nameInput.length) {
      const catchInfo = checkNameInput();
      if (catchInfo.length !== 0) {
        setCatchUser(catchInfo);
        return navigation.navigate('Compra de Produto');
      }
    }
    return setIsOpen(!isOpen);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        h={{
          base: '700',
          // lg: 'auto',
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Center w="100%" h="100%">
            <Box
              safeArea
              px="5"
              py="60"
              w="90%"
              maxW="340"
              minH="620"
              bgColor="white"
              borderRadius={8}
            >
              <Heading
                size="xl"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}
              >
                Pesquisar
              </Heading>
              <VStack space={3} mt="16">
                <Input
                  Label="CPF/CNPJ"
                  placeholder="CPF/CNPJ"
                  name="usuario"
                  value={CPFInput}
                  onChangeText={(value) => setCPFInput(value)}
                  ErrorMessage="Campo obrigatório"
                />
                <Input
                  Label="Nome"
                  placeholder="Nome"
                  name="Nome"
                  value={nameInput}
                  onChangeText={(value) => setNameInput(value)}
                />
                <Button
                  title="Consultar"
                  type="submit"
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              </VStack>

              <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                  <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Este Fornecedor não foi encontrado!</AlertDialog.Header>
                    <AlertDialog.Body>
                      Os dados inseridos não foram encontrados. Por favor, confira se os campos
                      preenchidos estão com os dados corretos.
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <BNS.Group space={2}>
                        <BNS colorScheme="danger" onPress={onClose} ref={cancelRef}>
                          Voltar
                        </BNS>
                      </BNS.Group>
                    </AlertDialog.Footer>
                  </AlertDialog.Content>
                </AlertDialog>
              </Center>
              <StatusBar style="auto" />
            </Box>
          </Center>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
