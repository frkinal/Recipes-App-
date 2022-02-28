import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#bdbdbd',
        backgroundColor:'#eeeeee',
        margin:10,
        flexDirection:"row",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        alignItems:"center",
        borderRadius:20,
    },
    image:{
        width:100,
        height:100,
        resizeMode:"contain",
        marginLeft:10,
    },
    banner_container:{
        padding:5,
        flex:1,
    },
    text:{
        fontWeight:"bold",
        fontSize:18,
        color:"#000",
        textAlign:"center"
    }
});