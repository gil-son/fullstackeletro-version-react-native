import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Login from '../../components/Login';


import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';

const menu = <IO name="menu" size={30} color="#900" />;

const home = <IO name="home" size={30} color="#900" />;
const rocket = <FA name="rocket" size={30} color="#900" />;
const book = <IO name="ios-book" size={30} color="#900" />;
const person = <IO name="person" size={30} color="#900" />;

// CSS
import styles from '../style.js';

const Produtos = ({ navigation }) => {

    return (
        <View style={styles.container} >
            
            <View style={styles.menu}><TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity></View>
            

            <View style={styles.main}>
                
                <View>
                    <Text>Produtos</Text>
                </View>

            </View>

            <View style={styles.footer}>
                    <View style={styles.box4}><TouchableOpacity onPress={() => navigation.navigate('Home')}>{home}</TouchableOpacity></View>
                    <View style={styles.box1}><TouchableOpacity onPress={() => navigation.navigate('Sobre')}>{rocket}</TouchableOpacity></View>
                    <View style={styles.box2}><TouchableOpacity onPress={() => navigation.navigate('Produtos')}>{book}</TouchableOpacity></View>
                    <View style={styles.box3}><TouchableOpacity onPress={() => alert('.')}>{person}</TouchableOpacity></View>
            </View>

        </View>
    );
}

export default Produtos;



