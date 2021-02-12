import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Produtos from './src/pages/Produtos';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} 
                       options={{ title: "Bem vindo(a) a Full Stack Eletro!!",
                        headerStyle:{
                          backgroundColor: '#000'
                        },
                        headerTintColor:'#fff'
                       }}
          />



          <Stack.Screen name="Sobre" component={Sobre} 
                         options={{ 
                         headerStyle:{
                           backgroundColor: '#000'
                         },
                         headerTintColor:'#fff'
                        }}
          />
                        



          <Stack.Screen name="Produtos" component={Produtos} 
                         options={{ title: "Confira os nossos Produtos!!",
                         headerStyle:{
                           backgroundColor: '#000'
                         },
                         headerTintColor:'#fff'
                        }}
          />
      </Stack.Navigator>  
    </NavigationContainer>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
