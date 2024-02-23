import { View, StyleSheet, Modal, Pressable } from "react-native";
import { Card, Image, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


const PerfilNav = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 20, marginStart: 15, color: 'white' }}>honeymoon</Text>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                <Image
                    style={styles.circulo}
                    source={require('../assets/pub13.jpg')}
                />
                <View style={{ flexDirection: 'row', marginTop: 45 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>3</Text>
                        <Text style={{ color: 'white' }}>Publicaciones</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginStart: 10 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>14.4M</Text>
                        <Text style={{ color: 'white' }}>Seguidores</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginStart: 10 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>240</Text>
                        <Text style={{ color: 'white' }}>Siguiendo</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'column', marginStart: 20 }}>
                <Text style={styles.texto}>Lana del Rey</Text>
                <Text style={{ marginTop: 10, color: 'white' }}>La ultra violenta</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontWeight: 'bold', marginStart: 20, color: 'white' }}>Historias destacadas</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image style={{ width: 80, height: 80, marginStart: 10, borderRadius: 100 }} source={require('../assets/pub13.jpg')} />
                <Image style={{ width: 80, height: 80, marginStart: 10, borderRadius: 100 }} source={require('../assets/pub13.jpg')} />
                <Image style={{ width: 80, height: 80, marginStart: 10, borderRadius: 100 }} source={require('../assets/pub13.jpg')} />
            </View>
            <View style={{ backgroundColor: 'white', height: 1.3, width: 500, marginTop: 10, justifyContent: 'center', alignSelf: 'center', }}></View>
            <View style={{ marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 130, height: 130 }} source={require('../assets/pub10.jpg')} />
                <Image style={{ width: 130, height: 130, marginStart: 2 }} source={require('../assets/pub11.jpg')} />
                <Image style={{ width: 130, height: 130, marginStart: 2 }} source={require('../assets/pub12.jpg')} />

            </View>
            <StatusBar basStyle={"light-content"} backgroundColor="#089779" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'black',
    },
    circulo: {
        height: 80,
        width: 80,
        borderRadius: 100,
        margin: 20
    },
    texto: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
    },

})


export default PerfilNav;