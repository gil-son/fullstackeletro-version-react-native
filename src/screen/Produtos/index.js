import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity, TextInput, Platform } from 'react-native';
import Login from '../../components/Login';


import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';

const menu = <IO name="menu" size={30} color="#000" />;

const cart = <IO name="cart-outline" size={30} color="#fff" />;
const card = <IO name="card-outline" size={30} color="#fff" />;


// CSS
// import styles from '../style.js';

// Products
import products from './../../base/products.js'

const Produtos = ({ navigation }) => {


    const data = products;
    console.log(data);

    return (
        <View style={styles.container} >


            <View style={styles.block1}>
                <View style={styles.menu}><TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity></View>
            </View>

            <View style={styles.categoria}>
                <TextInput placeholder="Pesquise aqui..."/>
            </View>

            <View style={styles.main}>

                <View>

                    {data.map((row, index) => {
                        return (

                            <View key={index} style={styles.block2}>
                                <ImageBackground

                                    source={require(`../../../assets/${row.imagem}`)}
                                    style={styles.logo}
                                >
                                </ImageBackground>
                                <Text style={styles.texto1}>{row.descricao}</Text>
                                <Text style={styles.texto1}>{row.precofinal}</Text>


                                <View style={styles.areaBtn}>

                                    <TouchableOpacity
                                        style={styles.btn}
                                        title="Acessar"

                                    >{cart}</TouchableOpacity>


                                    <TouchableOpacity
                                        style={styles.btn}
                                        title="Acessar"

                                    >{card}</TouchableOpacity>


                                </View>




                            </View>

                        )
                    })}



                </View>

            </View>



        </View>
    );
}

export default Produtos;




const styles = StyleSheet.create({
    container: {

        backgroundImage: Platform.OS === 'web' ? 'linear-gradient(#575787, #000)' : '#000',
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    block1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#fff'
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    main: {
        flexDirection: 'column',
        fontFamily: 'Comic Sans MS',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 3700,
    },
    categoria: {
        marginTop: 20,
        flexDirection: 'column',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11

    },
    block2: {
        flexDirection: 'column',
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11

    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 10
    },

    texto1: {
        justifyContent: 'center',
        color: '#000',
        fontSize: 16

    },
    areaBtn: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    btn: {
        marginTop: 4,
        width: 90,
        height: 50,
        borderRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#24292e',
        color: '#fff'
    }

})
