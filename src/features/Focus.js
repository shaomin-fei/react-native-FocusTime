import React,{useState} from "react";
import {View,StyleSheet,Text} from "react-native";
import {TextInput} from "react-native-paper";
import RoundedButton from "../components/RoundedButton";
import {fontSize,paddingSize} from "../utils/Sizes";

const Focus=({setFocusThing})=>{
  const [tempItem,setTempItem]=useState("zzs");
  return (
    <View style={style.container}>
    <View style={style.titleContainer}>
    <Text style={style.title}>What would you like to focus on</Text>
     <View style={style.inputContainer}>
    <TextInput style={style.textInput} 
    onSubmitEditing={
      ({nativeEvent})=>{
        setTempItem(nativeEvent.text);
    }
      }
      onChangeText={text=>setTempItem(text)}
      ></TextInput>
    <RoundedButton size={50} buttonText="+" onPress={
      ()=>{
        setFocusThing(tempItem)
        }
      }></RoundedButton>
    </View>
    </View>
   
    </View>
  );
}

const style=StyleSheet.create(
  {
    container:{
      flex:1,
      borderColor:'red',
      borderWidth:1

    },
    titleContainer:{
       flex:0.5,
      justifyContent:'center',
      padding:16,
       borderColor:'red',
      borderWidth:1
    },
    title:{
      color:'white',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:fontSize.lg,
     
    },
    inputContainer:{
      padding:paddingSize.sm,
      flexDirection:'row',
      alignItems:'center'
    },
    textInput:{
      flex:1,
      marginRight:15
    }
  }
);
export default Focus;