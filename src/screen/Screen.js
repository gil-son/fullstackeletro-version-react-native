import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';


import IO from 'react-native-vector-icons/Ionicons';
const home = <IO name="home" size={30} color="#900" />;

// CSS
// import styles from '../style.js';

const Screen = ({ navigation }) => {

    return (
        <View style={styles.container} >
           <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity style={{alignItems:"flex-end", margin:16}}
                 onPress={navigation.OpenDrawer}
                >
                    {home}
                </TouchableOpacity>
                <View style={{flex:1, alignItems:"center", justifyContent:"flex-end"}}>
                    <Text style={styles.text}>Screen</Text>
                </View>
           </SafeAreaView>
        </View>
    );
}

export default Screen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        
    },
    text:{
        color: "#161924",
        fontSize: 20,
        fontWeight:"500"
    }

})
