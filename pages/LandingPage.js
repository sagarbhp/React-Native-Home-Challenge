import React from 'react'
import {StyleSheet,
        Text, 
        View,
        TouchableOpacity,
        Dimensions,
    } from "react-native"

import {globalStyles} from "../styles/globalStyles"
import WelcomeText from "../components/WelcomeText"

export default function LandingPage({navigation}) {

    return (
        <View style={globalStyles.container}>
            <View style={styles.header}>
                <WelcomeText />
            </View>

            <View style={styles.footer}>
                <Text style={globalStyles.footer__text}>Already Have an Account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={globalStyles.footer__button}>Login</Text>
                </TouchableOpacity>
                <Text style={globalStyles.footer__text}>New User?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                    <Text style={globalStyles.footer__button}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    header:{
        flex:1,
        paddingHorizontal:(width*0.1),
        paddingTop:(height*0.2)
    },
    footer:{
        paddingHorizontal:(width*0.1),
        justifyContent:"center",
        backgroundColor:"#fefefe",
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },

})