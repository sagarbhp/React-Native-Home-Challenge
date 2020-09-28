//Most of the styles are written here for reuse in different component


import {StyleSheet, Dimensions} from "react-native"

const {width, height} = Dimensions.get("window")

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#009387"
    },
    home__container:{
        flex:1,
        backgroundColor:"#f1f3de"
    },
    header:{
        flex:.5,
        paddingHorizontal:(width*0.1),
        // paddingTop:(height*0.2)
    },
    home__header:{
        flex:1,
        paddingHorizontal:(width*0.1),
    },
    footer:{
        zIndex:1,
        paddingHorizontal:(width*0.1),
        paddingTop:(height*0.1),
        justifyContent:"center",
        backgroundColor:"#fefefe",
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:"relative",
        
    },
    input:{
        backgroundColor:"#fafafa",
        padding:10,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor: "#009387",
        marginBottom:10,
        
    },
    footer__button:{
        backgroundColor:"#d3c09a",
        color:"#fff",
        fontSize:22,
        fontWeight:"bold",
        paddingVertical:8,
        marginBottom:20,
        textAlign:"center",
        borderRadius:10,
    },
    footer__text:{
        fontSize:18,
        color:"#888",
    },
    keyboardAvoid__inner: {
        flex: 1,
        justifyContent: "flex-end"
    },

    welcomeText__text1:{
        fontSize:34,
        fontWeight:"bold",
        color:"#efefef"
    },
    welcomeText__text2:{
        fontSize:40,
        fontWeight:"bold",
        color:"#d3c09a",
    },
    home__text1:{
        marginTop:(height*.15),
        color:"#8d93ab",
        fontSize:30,
        fontWeight:"bold"
    },
    home__text2:{
        marginTop:(5),
        color:"#d49a89",
        fontSize:38,
        fontWeight:"bold"
    },
    error:{
        color:"red",
        fontSize:18,
    }
})