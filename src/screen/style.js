import React from 'react';
import {StyleSheet, Platform} from 'react-native';


const styles = StyleSheet.create({
    container: {
        
        backgroundImage: Platform.OS === 'web' ? 'linear-gradient(#575787, #000)' : '#000',
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center'
        
    }, 
    block1:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor:'#fff'
    },
    menu:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    main:{
        fontFamily:'Comic Sans MS',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'blue',
        flexDirection:'row'
    },
    box1:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
        
    }
    ,
    logo: {
      width: 150,
      height: 150,
      borderRadius: 10
    },
  
    input: {
      marginTop: 10,
      padding: 10,
      with: 300,
      backgroundColor: '#fff',
      fontSize: 15,
      borderRadius: 50
    },
    btn: {
      marginTop:4,
      width: 200,
      height: 50,
      borderRadius:20,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#24292e',
      color: '#fff'
  
    }

});

export default styles;