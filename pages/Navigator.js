import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from "./Loading"
import LandingPage from "./LandingPage"
import Login from "./Login"
import Register from "./Register"
import HomeTab from "./HomeTab"

export default function Navigator() {

    const Stack = createStackNavigator();
    return (
        <>
        <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{headerShown:false}}> */}
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#009387",  }, headerTintColor:"#ddd" }}
            >
                
                <Stack.Screen options={{headerShown: false}} name="LandingPage" component={LandingPage} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Loading" component={Loading} />
                <Stack.Screen options={{headerShown: false}} name="HomeTab" component={HomeTab} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}
