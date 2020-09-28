import React, {useState} from 'react'
import {StyleSheet,
    Text, 
    TextInput,
    View,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Platform 
} from "react-native"
import AsyncStorage from '@react-native-community/async-storage';

import {globalStyles} from "../styles/globalStyles"


//--------------------------------------------------------------------------- All import Above

export default function Login(props) {
    //----------------------------------------------------------------- hooks for input fields
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const [error, setError]=useState("")

    //-------------------------------------------------------------------Post Req to server
    const sendCred = async ()=>{
        // Need to make sure this runs once
        if(username.length&&password.length){
            //--------------------------------------------------------- This part Prevents
            setError("")
            let pass=password
            setPassword("")
            //------------------------------------------- The user from keep clicking
            fetch("https://secret-refuge-92823.herokuapp.com/login",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ //---sending the json data server is expecting in req.body
                    username:username,
                    password:pass,
                    adress:"adress", //--- dummy adress because i am using same user schema in mongoose
                })
            })
            .then(res=> res.json())
            .then(async (data)=>{
                try {
                        await AsyncStorage.setItem("token",data.token)
                        //------------------------------------------------------- Success from server
                        props.navigation.replace("Loading")
                } catch (e) {
                        try{
                            setError(data.error) //---------------------- trying to show error message
                        }catch{
                            console.log(e)
                        }
                }
                
                
            })
        }else{
            setError("Error: Field Left Empty")
        }
      }

    return (
        //----------------------------Input Field Should Move Out so keyboard doesn't block it
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={globalStyles.container}
        >
            {/*-------------- Pressing on anywhere else in the screen should dismiss the keyboard */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={globalStyles.keyboardAvoid__inner}>
                    
                    {/* --------------------------------------------------------Just for styling */}
                    {/* <View style={globalStyles.header}></View> */}

                    
                    <View style={globalStyles.footer}>
                        <Text style={globalStyles.error}>{error}</Text>
                    {/* --------------------------------------------------------- UserName Input */}
                        <Text style={globalStyles.footer__text}>Username</Text>
                        <TextInput style={globalStyles.input}
                            placeholder="Enter Your Username"
                            value={username}
                            onChangeText={(text)=>{setUsername(text)}}
                        />
                    {/* ----------------------------------------------------------Password Input */}
                        <Text style={globalStyles.footer__text}>Password</Text>
                        <TextInput style={globalStyles.input}
                            placeholder="Enter Your Password"
                            value={password}
                            onChangeText={(text)=>{setPassword(text)}}
                            secureTextEntry={true} 
                        />
                    {/* -----------------------------------------------------------Error Message */}

                    {/* -------------------Login Button Clicking will initiate fetch req to server */}
                        <TouchableOpacity onPress={() => sendCred()}>
                            <Text style={globalStyles.footer__button}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* --------------Next view component will make sure that input field will move up 
                    ---------------------------------------------------------When key board appears */}
                    <View style={{flex:0.7, backgroundColor:"#fefefe"}}></View>
                </View>

            </TouchableWithoutFeedback>


        </KeyboardAvoidingView>
    )
}

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    login__inner: {
      flex: 1,
      justifyContent: "flex-end"
    },

  });