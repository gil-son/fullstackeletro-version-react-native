import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';
import Login from '../../components/Login';


// CSS
import styles from '../style.js';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <View> 
                <Button title="Home" onPress={() => navigation.navigate('Home')}  />
                <Button title="Sobre" onPress={() => navigation.navigate('Sobre', {nome: 'Fulano'})}  />
                <Button title="Produtos" onPress={() => navigation.navigate('Produtos')}  />
            </View>

            <View style={styles.main}>
                
                <View>
                    <Text>Home</Text>
                </View>

            </View>


        </View>
    );
}

export default Home;



