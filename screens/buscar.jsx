import { StyleSheet, TextInput, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';


Buscar = () => {
    return(
        <View style={styles.container}>
            <View style={styles.busqueda} >
                <MaterialIcons style={{marginTop: 8, marginLeft: 10}} name="search" size={36} color={'white'} />
            <TextInput
                    style={styles.texto}
                    placeholder='password' textAlign="center" />
          </View>
          <View style={{backgroundColor: 'white', height: 1, width: 320, marginTop: 10, justifyContent: 'center', alignSelf: 'center',}}></View>
            <View style={styles.busquedas}>
            <Image style={styles.postImage} source={require("../assets/pub1.jpeg")} />
            <Image style={styles.postImage} source={require("../assets/pu2.jpg")} />
            <Image style={styles.postImage} source={require("../assets/pub3.jpg")} />
            </View>
            <View style={styles.abajo}>
            <Image style={styles.postImage} source={require("../assets/pub4.jpg")} />
            <Image style={styles.postImage} source={require("../assets/pub5.jpg")} />
            <Image style={styles.postImage} source={require("../assets/pub6.jpg")} />
            </View>
            <View style={styles.abajo}>
            <Image style={styles.postImage} source={require("../assets/pub7.jpg")} />
            <Image style={styles.postImage} source={require("../assets/pub8.jpg")} />
            <Image style={styles.postImage} source={require("../assets/pub9.jpg")} />
            </View>
            <StatusBar basStyle={"light-content"} backgroundColor="#089779" />
            </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },
    busqueda:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
        
    },
    texto:{
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 50,
        height: 50,
        width: 300,
        backgroundColor: 'gray',
    },
    busquedas:{
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    postImage:{
        width: 110,
        height: 110,
        margin: 5
    },
    abajo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1
    }
}
)

export default Buscar;