//Note: User must be authenticated to see this page
//Here We create the 2 Home Tabs. 1 for username and Profile Pic
//Another for Map


import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomePage from "./HomePage"
import Map from "./Map"
import { useStateValue } from "../StateProvider/StateProvider"
import {actionTypes} from "../StateProvider/reducer"
//---------------------------------------------------------------- All Exports Above
export default function HomeTab(){

    const [{address, user}, dispatch] = useStateValue();
    //-------------------------------------------------- fetching the address coordinate from given address
    //------------------------------- Note adress <-- from server and, address <-- is the coordinate
    useEffect(()=>{
        fetch("https://us1.locationiq.com/v1/search.php?key=ce6b2fddd8ce66&q=665"+ user.adress + "&format=json")
        .then(res=>res.json())
        .then(data=>{
            try{
                if(data[0].boundingbox){
                    dispatch({
                        type: actionTypes.SET_ADDRESS,
                        address: data[0].boundingbox
                    })
                }
            }catch(err){
                //Nothing to do. :( can't point a good location in map
            }
           
        })
    },[])

    //Rest is pretty much creating the bottom tab navigator

    
    const Tab = createBottomTabNavigator();

    return(
        
        <Tab.Navigator         tabBarOptions={{
          activeTintColor: '#40a8c4',
          inactiveTintColor: '#aaa',
          activeBackgroundColor:"#e3dfc8",
          inactiveBackgroundColor:"#f5f1da",
          labelStyle:{
              fontSize:18,
              fontWeight:"bold",
          },
          labelPosition:"beside-icon",
          
        }}>
            <Tab.Screen name="Home" component={HomePage} />

            <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
      
    )
}