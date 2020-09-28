//Custom Avater

import React from 'react'
import {View, Text, StyleSheet} from "react-native"
import { useStateValue } from "../StateProvider/StateProvider"

export default function Avatar(prop) {
    const [{address, user}, dispatch] = useStateValue();
    const firstLetter = user.username.split("")
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Text style={styles.text}>{firstLetter[0].toUpperCase()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
        marginTop: 40,
    },
    avatar:{
        borderRadius:999,
        backgroundColor:"#009387",
        height:200,
        width:200,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        
        fontSize:120,
        color:"#eee",
        fontWeight:"bold"
    }
})
