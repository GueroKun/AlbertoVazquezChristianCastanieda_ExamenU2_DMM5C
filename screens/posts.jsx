import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View, Text, StatusBar, SectionList, Image, TouchableOpacity, Modal} from "react-native";

Posts = () => {

    const [modalVisible, setModalVisible] = useState(false);
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}></Modal>

    const navigation = useNavigation();

    const posts = [
        { image: require("../assets/sayori.jpg"), description: "Te quiero Sarori", likes: 200, username: "Sayori", userimage: require("../assets/publicacionSayori.jpeg") },
        { image: require("../assets/publicacionMiku.jpg"), description: "Quintillizas", likes: 70, username: "Miku Nakano", userimage: require("../assets/miku.jpg") },
        { image: require("../assets/pub13.jpg"), description: "Billie xd", likes: 100, username: "Billie", userimage: require("../assets/pub10.jpg") },
        { image: require("../assets/pub10.jpg"), description: "Bllie bien aca", likes: 1000, username: "Billie XD", userimage: require("../assets/pub12.jpg") },
    ];


    const [postsH, setPosts] = useState(posts);
    

    const goToUser = (item) => {
        navigation.navigate('Perfil', item);
    };

    const likePosts = (item) => {
        const updatedPosts = postsH.map(post => {
            if (post === item) {
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        });

        setPosts(updatedPosts);
    };

    return (
        <View style={styles.container}>
            <View style={{marginTop: 7, paddingLeft: 18, height: 63, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Image style={styles.logo} source={{uri: 'https://thumbs.dreamstime.com/b/logotipo-de-texto-instagram-vectorial-fuente-silueta-negra-aislada-m%C3%A1s-reciente-para-aplicaciones-m%C3%B3viles-o-materiales-204012277.jpg'}}  />
            <View style={styles.iconsnav}>
            <MaterialIcons style={styles.corazon} name="favorite-border" size={24} color={'white'}   />
            <MaterialIcons style={styles.mensaje} name="send" size={24} color={'white'} />
                </View>
            </View>
            <View>
            <View style={{backgroundColor: 'black', height: 110}}>
                    <SectionList 
                    horizontal
                      sections={[{ title: "Perfiles", data: postsH }]}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({ item }) => {
                        return (
                          <View style={styles.perfilUser}>
                            <Image style={styles.profilePhotoHistory} source={item.userimage} />
                            <Text style={styles.itemText}>{item.username}</Text>
                          </View>
                        );
                      }}
                    /> 
                </View>
                <SectionList
                    sections={[{ title: "Posts", data: postsH }]}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => {
                        return (
                            <View>
                            <View style={styles.cardPost}>
                                <TouchableOpacity onPress={() => goToUser(item)}>
                                    <View style={styles.userInfo}>
                                        <Image style={styles.profilePhoto} source={item.userimage} />
                                        <Text style={styles.userName}>{item.username}</Text>    
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Image style={styles.postImage} source={item.image} />
                                </View>
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={() => likePosts(item)}>
                                        <MaterialIcons style={{marginRight: 10}} name="favorite-border" size={24} color={'white'}   />
                                    </TouchableOpacity>
                                    <MaterialIcons style={{marginRight: 10}} name="chat-bubble-outline" size={24} color={'white'} />
                                    <MaterialIcons style={{marginRight: 220}} name="send" size={24} color={'white'} />
                                    <MaterialIcons style={{marginRight: 10}} name="bookmark-outline" size={24} color={'white'} />
                                </View>
                                <Text style={{
                                        fontSize: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 5,
                                        color: 'white'
                                    }}>{item.likes} Personas les gusta</Text>
                                    
                                <View style={styles.description}>
                                    <Text style={{
                                        fontSize: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 5,
                                        color: 'white'
                                    }}>{item.description}</Text>
                                </View>
                                </View>
                            </View>
                        
                        );
                    }}
                />
            </View>
            <StatusBar barStyle={"light-content"} backgroundColor={'#039779'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    },
    userInfo: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    icons: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginTop: 3,
        marginLeft: 5,
        padding: 8
    },
    cardPost: {
        backgroundColor: "#d5b39a",
        width: 'auto',
        height: 'auto',
        margin: 1,
        backgroundColor: 'black',
        flex: 1
    },
    userName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginLeft: 3,
        color: 'white'
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5,
    },
    profilePhotoHistory: {
        width: 80,
        height: 80,
        borderRadius: 100,
        margin: 5,
        borderColor: 'white',
        borderWidth: 1.5,
    },
    postImage: {
        width: 'auto',
        height: 300
    },
    description: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 3,
    },
    logo:{
        width: 125,
        height: 80,
        resizeMode : 'contain'
    },
    corazon:{
       width: 25,
       height: 65,
       resizeMode : 'contain',
       marginTop: 10,
       marginRight: 20 
    },
    mensaje:{
        width: 25,
        height: 65,
        resizeMode : 'contain',
        marginTop: 10,
        marginRight: 25 
     },
    iconsnav:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    itemText: {
        fontSize: 12,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      perfilUser:{
        marginLeft: 10
      },
      imagen: {
        height: 150,
        width: 150,
        marginBottom: 20,
        borderRadius: 20
      },
    
});

export default Posts;
