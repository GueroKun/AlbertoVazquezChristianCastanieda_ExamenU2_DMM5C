import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import { Icon, color } from "@rneui/base";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import PerfilNav from "./profile";
import Posts from "./posts";
import Buscar from "./buscar";


const Tab = createBottomTabNavigator();

const BottomNav =() => {
    return(
            <Tab.Navigator initialRouteName="Posts">
            <Tab.Screen name="Posts" component={Posts}  options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'red',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialIcons name="home" color={'red'} size={30} />
                      ),
                }}
            />

            <Tab.Screen name="Buscar" component={Buscar}  options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'blue',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialIcons name="search" color={'blue'} size={30} />
                      ),
                }}
            />

          

            <Tab.Screen name="Perfil" component={PerfilNav}  options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'blue',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialIcons name="person" color={'blue'} size={30} />
                      ),
                }}
            />
               
            </Tab.Navigator>
    )
}

export default BottomNav;