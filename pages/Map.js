//Here we will show the working map with a pin on the given location.
//well close enough since the aPI gives us a bounding region
//Once clicked on the pin it should show the user address

import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useStateValue } from "../StateProvider/StateProvider"

export default function Map () {

    const [{user, address}, dispatch] = useStateValue()
    
    // Point to random location if we can't get the address location
    let latitude=44
    let longitude=-75
    let invalid=""
    
    // Taking the mid point as the pin coordinate
    // but first need to check if API returned a valid coordinate
    try{
        latitude = (Number(address[0])+ Number(address[1]))/2
        longitude = (Number(address[2]) + Number(address[3]))/2
     //if not valid coordinate give message to user
    }catch(err){
      invalid="Could not fetch location coordinate :("
    }


    return (
      <View style={styles.container}>
        <MapView 
        style={styles.mapStyle} 
        initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: .8,
        longitudeDelta: 0.4,
        }}
        >
             <Marker
                coordinate={{latitude: latitude, longitude: longitude }}
                title={user.adress}
                 description={invalid}
            />
        </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});