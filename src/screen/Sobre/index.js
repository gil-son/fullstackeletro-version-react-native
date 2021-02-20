import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';


import IO from 'react-native-vector-icons/Ionicons';

const menu = <IO name="menu" size={30} color="#000" />;




// CSS
import styles from '../style.js';

const Sobre = ({navigation}) => {

    return (
        <View style={styles.container} >

           <View style={styles.block1}>
                <View style={styles.menu}><TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity></View>
            </View>
            

            <View style={styles.main}>
                
                <View style={styles.box1}>
                    <Text style={styles.texto}>
                        A Full Stack Eletro faz parte de um projeto desenvolvido sobre o Apoio da Recode Pro.
                    </Text>
                </View>

                <View style={styles.box1}>
                    <Text style={styles.texto}>
                        Uma iniciativa que busca dar oportunidade às pessoas que não tem nenhuma vínculo com a tecnologia
                        ou tem algum conhecimento.
                    </Text>
                </View>
                
                <View style={styles.box1}>
                    <Text style={styles.texto}>
                        Essa jornada tem o período de 6 meses. Ao final você sai com bastante experiência, amigos e um emprego!
                    </Text>
                </View>
                
            </View>

            
            
        </View>
    );
}

export default Sobre;


