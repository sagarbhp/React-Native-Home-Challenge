
//--------------------------------------------------- This Page is very important

import React, {useEffect} from 'react'
import {ActivityIndicator, View, StyleSheet} from "react-native"
import AsyncStorage from '@react-native-community/async-storage'
import { useStateValue } from "../StateProvider/StateProvider"
import {actionTypes} from "../StateProvider/reducer"
// ----------------------------------------------------All imports above

export default function Loading(props) {

    //--------------------- if user data is fetched we will put it in Context
    const [{user}, dispatch] = useStateValue();

    // ------------------------ this function performs a get request to get 
    //------------------------user information from the server
    const detectLogin = async ()=>{
        //--------------------------retriving token from Storage and requesting data
        const token= await AsyncStorage.getItem("token")
        if(token){
            fetch("https://secret-refuge-92823.herokuapp.com/",{
                headers: new Headers({
                    Authorization:"Bearer "+ token
                })
            }).then(res => res.json())
            .then(data =>{
                try{
                    const dummy = data.username
                    dispatch({
                        type: actionTypes.SET_USER,
                        user:data
                    })
                    // ----------------We have user data!!------- So Show them home!
                    props.navigation.replace("HomeTab")
                }catch(e){
                // --------------------------------- server send error going back to login page
                    props.navigation.replace("LandingPage")
            }
        })
            
        }else{
            // ------------------------------------ Token was not found taking the user to landing page
            props.navigation.replace("LandingPage")
        }
    }

    // -------------------------------------------------- Use Effect to initiate detect login function
    useEffect(()=>{
        detectLogin()
    },[])

    return (
       <View>
            <ActivityIndicator style={{paddingTop:200}} size="large"  color="blue"/>
       </View>
    )
}