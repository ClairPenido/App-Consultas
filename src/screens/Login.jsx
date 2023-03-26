/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/prefer-default-export */
import { StatusBar } from 'expo-status-bar';
import {
  VStack,
  Heading,
  Center,
  Icon,
  Pressable,
  FormControl,
  Box,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base';
import React, { useState, useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Context } from '../context/Provider';

export function Login() {
  const [passwordInput, setPasswordInput] = useState('');
  const [userErrors, setUserErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const [show, setShow] = useState(false);
  const { userInput, setUserInput } = useContext(Context);

  const navigation = useNavigation();

  const checkUserInput = () => {
    if (!userInput) {
      setUserErrors('usuário obrigatório');
      return false;
    }
    if (userInput.length < 3) {
      setUserErrors('usuários válidos possuem mais que 3 caracteres');
      return false;
    }

    return true;
  };

  const checkPasswordInput = () => {
    if (!passwordInput) {
      setPasswordErrors('senha obrigatória');
      return false;
    }
    if (passwordInput.length < 6) {
      setPasswordErrors('senhas válidas possuem mais que 6 caracteres');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const teste1 = checkPasswordInput();
    const teste2 = checkUserInput();
    if (teste1 === true && teste2 === true) {
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView mt={5}>
      <KeyboardAvoidingView
        behavior="padding"
        h={{
          base: '700',
        }}
      >
        <Center w="100%" h="100%">
          <Box
            safeArea
            px="5"
            py="60"
            w="90%"
            maxW="340"
            // minH="620"
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
              Bem-Vindo!
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: 'warmGray.200',
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="md"
            >
              Entre para continuar
            </Heading>

            <VStack space={3} mt="10">
              <FormControl>
                <Input
                  Label="Usuário"
                  name="user"
                  Type="text"
                  value={userInput}
                  invalid={userErrors !== ''}
                  errorStatus={userErrors}
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
                  }
                  onChangeText={(value) => setUserInput(value)}
                />
                <Input
                  Label="Senha"
                  name="Senha"
                  value={passwordInput}
                  type={show ? 'text' : 'password'}
                  invalid={passwordErrors !== ''}
                  errorStatus={passwordErrors}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                  onChangeText={(value) => setPasswordInput(value)}
                />
              </FormControl>
              <Button
                mt="5"
                title="Acessar"
                type="submit"
                onPress={() => {
                  handleSubmit();
                }}
              />
              <StatusBar style="auto" />
            </VStack>
          </Box>
        </Center>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
