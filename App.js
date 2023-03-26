import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';
import { CompraProduto } from './src/screens/CompraProduto';
import { TelaConsultaDev } from './src/screens/TelaConsultaDev';
import Provider from './src/context/Provider';
import { Devolucao } from './src/screens/Devolução';
import { TelaConsultaSaque } from './src/screens/TelaConsultaSaque';
import { TelaConsultaDCompra } from './src/screens/TelaConsultaDCompra';
import { Saque } from './src/screens/Saque';
import { TelaUser404 } from './src/screens/TelaUser404';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider>
          <Stack.Navigator detachInactiveScreens={false}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: '', headerTransparent: true, headerShown: false }}
            />
            <Stack.Screen name="Home" component={Home} options={{ title: 'Voltar' }} />
            <Stack.Screen
              name="Compra de Produto"
              component={CompraProduto}
              options={{ title: 'Voltar' }}
            />
            <Stack.Screen name="Devolução" component={Devolucao} options={{ title: 'Voltar' }} />
            <Stack.Screen name="Saque" component={Saque} options={{ title: 'Voltar' }} />
            <Stack.Screen
              name="Tela de Consulta Devolução"
              component={TelaConsultaDev}
              options={{ title: 'Voltar' }}
            />
            <Stack.Screen
              name="Tela de Consulta Saque"
              component={TelaConsultaSaque}
              options={{ title: 'Voltar' }}
            />
            <Stack.Screen
              name="Tela de Consulta Compra"
              component={TelaConsultaDCompra}
              options={{ title: 'Voltar' }}
            />
            <Stack.Screen name="Tela User404" component={TelaUser404} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
