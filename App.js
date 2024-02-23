import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/splash";
import Login from "./screens/login";
import BottomNav from "./screens/bottomtab";


const Stack = createStackNavigator();

export default App = () =>{

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash"
          component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login"
          component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="BottomTav"
          component={BottomNav} options={{ headerShown: false }} />
          
      </Stack.Navigator>
    </NavigationContainer>
  )
}