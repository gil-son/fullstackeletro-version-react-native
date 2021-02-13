import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Produtos from './src/pages/Produtos';
import Login from './src/components/Login';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Sobre">
          <Drawer.Screen name="Home" component={Home} 
                       options={{ title: "Bem vindo(a) a Full Stack Eletro!!",
                        headerStyle:{
                          backgroundColor: '#000'
                        },
                        headerTintColor:'#fff'
                       }}
          />



          <Drawer.Screen name="Sobre" component={Sobre} 
                         options={{ 
                         headerStyle:{
                           backgroundColor: '#000'
                         },
                         headerTintColor:'#fff'
                        }}
          />
                        



          <Drawer.Screen name="Produtos" component={Produtos} 
                         options={{ title: "Confira os nossos Produtos!!",
                         headerStyle:{
                           backgroundColor: '#000'
                         },
                         headerTintColor:'#fff'
                        }}
          />


       
         
      </Drawer.Navigator>  
    </NavigationContainer>
  
  );
}

// const styles = StyleSheet.create({
//   global: {
//     fontFamily:'Comic Sans MS',
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


