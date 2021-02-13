import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar} from 'react-native';
// import Login from '../../components/Login';


import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';

const menu = <IO name="menu" size={30} color="#900" />;

const home = <IO name="home" size={30} color="#900" />;
const rocket = <FA name="rocket" size={30} color="#900" />;
const book = <IO name="ios-book" size={30} color="#900" />;
const person = <IO name="person" size={30} color="#900" />;

// CSS
import styles from '../style.js';

const Home = ({ navigation }) => {

    
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");


    // function login(){
    //     navigation.navigate('Produtos')
    // }

    function limpar(){
        setEmail("");
        setSenha("");
    }


    return (
        <View style={styles.container} >
            
            {/* <View style={styles.menu}><TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity></View> */}
            

            <View style={styles.main}>
                
                <View>
                    <Text>Home</Text>
                    <View style={styles.container}>
      <StatusBar hidden/>
      {/* <Text>Hello World!</Text>
      <StatusBar style="auto" /> */}
      {/* <Image source={require('')}
        style={{width: 150,
               height: 150,
               borderRadius: 10,
               display: img}}>

      </Image> */}


      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
      />


      <TextInput
        style={styles.input}
        placeholder="Digite a sua senha"
        secureTextEntry={true}
        value={senha}
        onChange={(event) => { setSenha(event.target.value) }}
      />


      <TouchableOpacity
        style={styles.btn}
        title="Login"
        onPress={() => navigation.navigate('Produtos')}
      >Login</TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        title="Limpar"
        onPress={() => limpar()}
      >Limpar</TouchableOpacity>

    </View>

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

export default Home;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'red',
//         width: '100%',
//         height: '100%',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         flexDirection: 'column'
//     },
//     menu:{
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         alignItems: 'center'
//     },
//     main:{
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });
