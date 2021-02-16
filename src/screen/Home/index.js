// Libraries

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';


const Home = ({ navigation }) => {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [img, setImg] = React.useState("megaman01.gif");

    const dadosValidos = ({email: "aluno@recodepro.com", senha: "obrigado"}) // obj


    function acessar() {

      if(senha === dadosValidos.senha && email === dadosValidos.email){
        setImg("megaman02.gif")
          setTimeout( () => navigation.navigate('Produtos'),3000);
      }else{
        setImg("protoman.gif")
        console.log(senha)
        console.log(dadosValidos.senha)
        console.log(dadosValidos.email)
      }
         
    }


    return (
        <View style={styles.container}>

           

            <View style={styles.main}>


                <View style={styles.block1}>
                   
                        <Text style={styles.h1}>Full Stack Eletro</Text>
                        <ImageBackground
                         source={require(`../../../assets/${img}`) }
                         style={styles.logo} 
                        >
                        </ImageBackground>
                        
                    

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu email..."
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Digite a sua senha..."
                        secureTextEntry={true}
                        value={senha}
                        onChange={(event) => { setSenha(event.target.value) }}
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        title="Acessar"
                        onPress={acessar}

                    >
                        <Text style={styles.texto1} onPress={acessar}>Entrar</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity onPress={() => navigation.navigate('Produtos')}>
                        <Text style={styles.texto2}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>


            </View>

           
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(#575787, #000)',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        // fontFamily:'Luminari'
    },
    main: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
    },
    block1: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // backgroundColor: '#c3c3c3',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 100,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
        marginBottom: 70
    },
    input: {
        marginTop: 12,
        paddingLeft: 5,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: '7%',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius: 5
    },
    btn: {
        marginTop: 12,
        width: '50%',
        height: '7%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4c6697'

    },
    h1:{
        color: '#fff',
        fontSize: 32,
        fontFamily:'Jazz LET, fantasy'
    },
    texto1: {
        color: '#fff',
        fontSize: 20

    },
    texto2:{
        marginTop: 12,
        fontSize: 16,
        color:'#fff'
    },
    footer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '120px',
        flexDirection: 'row'

    },
    box1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    }
    ,
    box2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    },

    box3: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    },

    box4: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
    }

})