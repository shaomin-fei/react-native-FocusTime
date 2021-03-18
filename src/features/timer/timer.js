import React from "react";
import {View , StyleSheet, Text } from "react-native";

import CountDown from '../../components/CountDown';
const Timer=({focusThing})=>{
  return (
    <View style={styles.container}>
    <CountDown/>
    <View>
     <Text style={styles.title}>
      Focus On
    </Text>
     <Text style={styles.task}>
      {focusThing}
    </Text>
    </View>
   
    </View>
  );
}
const styles=StyleSheet.create(
  {
    container:{
      flex:1,
    },
    title:{
      color:'white',
      textAlign:'center'
    },
    task:{
      fontWeight:'bold',
      textAlign:'center',
      color:'white'
    }
  }
);
export default Timer;