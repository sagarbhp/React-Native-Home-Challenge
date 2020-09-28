import React from 'react'
import {Text, View } from "react-native"
import {globalStyles} from "../styles/globalStyles"

export default function WelcomeText() {
    return (
        <View>
            <Text style={globalStyles.welcomeText__text1}>Welcome to</Text>
            <Text style={globalStyles.welcomeText__text2}>My Assignment</Text>
        </View>
    )
}
