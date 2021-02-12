import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';



// CSS
import styles from '../style.js';

const Sobre = ({route}) => {

    return (
        <View style={styles.container} >
            <View> 
                <Button title="Home" onPress={() => navigation.navigate('Home')}  />
                <Button title="Sobre" onPress={() => navigation.navigate('Sobre')}  />
                <Button title="Produtos" onPress={() => navigation.navigate('Produtos')}  />
            </View>

            <View style={styles.main}>
                
                <View>
                    <Text>Sobre</Text>
                    <Text>E ae {route.params?.nome}</Text>
                </View>

            </View>


        </View>
    );
}

export default Sobre;



