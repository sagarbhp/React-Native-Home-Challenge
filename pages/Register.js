import React, {useState} from 'react'
import {
    Text, 
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Platform ,
} from "react-native"
import AsyncStorage from '@react-native-community/async-storage'

import {globalStyles} from "../styles/globalStyles"
//-----------------------------------------------------------------------------------All imports above


export default function Register(props) {
    //----------------------------------------------------------- hooks to store input data
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [adress, setAdress]=useState("")
    const [error, setError]=useState("")

    //----------------------------------------------------------------POST REQ to DATA BASE************
    const sendCred = async ()=>{
        if(username.length&&password.length&&adress.length){
            //-------------------------------------------------- This prevents the user from multiple click
            let pass = password
            setPassword("")
            
            //------------------------------------------------------------------------
            
            fetch("https://secret-refuge-92823.herokuapp.com/register",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    username:username,
                    password:pass,
                    adress:adress,
                })
            })
            .then(res=> res.json())
            .then(async (data)=>{
                //--------------------------------------------- ----------did we receive token or was there an err?
                    try {
                        //--------------------------------------------------------------we did receive token!!!!
                        await AsyncStorage.setItem("token",data.token)
                        props.navigation.replace("Loading")
                    } catch (e) {
                        //---------------- Either error from server or problem saving. eitherway app should not crush
                        try{
                            setError(data.error)
                        }catch{
                            log(e)
                        }
                    }

                    //------------------------------------------------------------server sent an error report
            }) //--------------------------------------------------------------- if user left fields empty
        }else{ 
            setError("Fields left empty") //--------------------------------- if any field is empty
        }
    }



    // ********************************************RETURN***********************************************
    return (
        //-----------------------------------Input Field Should Move Out so keyboard doesn't block it
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={globalStyles.container}
        >
            {/* ----------------Pressing on anywhere else in the screen should dismiss the keyboard */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={globalStyles.keyboardAvoid__inner}>
                    
                    
                    {/* --------------------------------------------------Username input field */}
                    <View style={globalStyles.footer}>
                        <Text style={globalStyles.error}>{error}</Text>  
                        <Text style={globalStyles.footer__text}>Username</Text>
                        <TextInput style={globalStyles.input}
                            placeholder="username, email, phone no."
                            value={username}
                            onChangeText={(text)=>{setUsername(text)}}
                        />
                    {/* ---------------------------------------------------------------Password input */}
                        <Text style={globalStyles.footer__text}>Password</Text>
                        <TextInput style={globalStyles.input}
                            placeholder="Enter Your Password"
                            value={password}
                            onChangeText={(text)=>{setPassword(text)}}
                            secureTextEntry={true}
                        />
                    {/* ---------------------------------------------------------------------Adress Input */}
                        <Text style={globalStyles.footer__text}>Adress</Text>
                        <TextInput style={globalStyles.input}
                            placeholder="Street City Country ..."
                            value={adress}
                            onChangeText={(text)=>{setAdress(text)}}
                        />
                    {/* -----------------------------   Register Button clicking will initiate fetch req. */}
                        <TouchableOpacity onPress={() => sendCred()}>
                            <Text style={globalStyles.footer__button}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* ---------------------Next view component will make sure that input field will move up 
                        ----------------------------------------------------------When key board appears */}
                    <View style={{flex:.7, backgroundColor:"#fefefe"}}></View>
                    
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

