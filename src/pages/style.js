import React from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column'
    }, 
    menu:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    main:{
        fontFamily:'Comic Sans MS',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'blue',
        flexDirection:'row'
    },
    box1:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        backgroundColor: 'green',
        flexDirection:'row'
    }
    ,
    box2:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        backgroundColor: 'pink',
        flexDirection:'row'
    },

    box3:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        backgroundColor: 'yellow',
        flexDirection:'row'
    },

    box4:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        backgroundColor: 'purple',
        flexDirection:'row'
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