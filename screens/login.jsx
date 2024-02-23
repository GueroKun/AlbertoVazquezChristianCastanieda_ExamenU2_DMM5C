import { useNavigation } from '@react-navigation/native';
import { Card, Image, Button } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';


const Login = () => {

    const navigation = useNavigation();

    let [userName, setUserName] = useState('');
    let [pass, setUserPassword] = useState('');

    const validUser = {
        user: 'guero',
        password: 'root'
    }

    let intentos = 0;

    const validateUser = () => {
        if (intentos > 3) {
            Alert.alert('Demasiados intentos',
                `Usuario bloqueado por 30 minutos`,
                [
                    {
                        text: 'Ok'
                    }
                ]);
        } else {
            if (userName === validUser.user
                && pass === validUser.password) {
                navigation.replace('BottomTav');
            } else {
                Alert.alert('Usuario incorrecto',
                    `Tienes ${3 - intentos} intentos restantes `,
                    [
                        {
                            text: 'Ok', onPress: () => {
                                intentos++;
                            }
                        }
                    ]);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={{alignItems: 'center', marginBottom: 50}}>
                <Image
                    style={styles.circulo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
                    }} />
                </View>
                <TextInput
                    value={userName}
                    onChangeText={setUserName}
                    style={styles.texto}
                    placeholder='Usuario' />
                <TextInput
                    value={pass}
                    onChangeText={setUserPassword}
                    style={styles.texto}
                    placeholder='Contraseña' />
                <View style={{borderRadius: 100 
                }}>
                    <Button
                    title={'Iniciar sesión'}
                    color={'#00A6F3'}
                    onPress={validateUser} />
                    </View>
            </Card>

            <View style={{bottom: -100}}>
            <Image
                    style={{height: 100,  width: 100, resizeMode : 'contain'}}
                    source={{
                        uri: 'https://1000marcas.net/wp-content/uploads/2021/10/meta-logo-1.png'
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2C2C'
    },
    circulo: {
        height: 75,
        width: 75,
        borderRadius: 100,
        margin: 20, 
        resizeMode : 'contain'
    },
    texto: {
        fontSize: 15,    
        backgroundColor: '#BABABA',
        height: 40,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15
    },
    card: {
        width: '90%', 
        borderRadius: 10,
        backgroundColor: '#2C2C2C',
        borderBlockColor: '#2C2C2C',
    },
    
})

export default Login;