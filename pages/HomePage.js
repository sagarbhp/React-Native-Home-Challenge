import React from 'react'
import {Text,
        View,
        TouchableOpacity
} from "react-native"
import { useStateValue } from "../StateProvider/StateProvider"
import AsyncStorage from '@react-native-community/async-storage'

import {globalStyles} from "../styles/globalStyles"
import Avatar from "../components/Avatar"

//--------------------------------------------------------------- All imports above
export default function HomePage(props) {

    const [{address, user}, dispatch] = useStateValue();
// -------------------------------------------------- fetching username from Context
    const logout =  () =>{
            AsyncStorage.removeItem("token").then(()=>{
            props.navigation.replace("LandingPage")
        })
    }

    return (

        //------------------------------------------- Displaying Username
        <View style={globalStyles.home__container}>
            <View style={globalStyles.home__header}>
                <Text style={globalStyles.home__text1}>Welcome</Text>
                <Text style={globalStyles.home__text2}>{user.username}</Text>
                <Avatar />
                <TouchableOpacity onPress={()=>logout()}>
                    <Text style={globalStyles.footer__button}>Log out</Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.home__footer}>
                
            </View>

            
        </View>
    )
}
