import React from "react";
import {View, StyleSheet,Text} from "react-native";

import {fontSize,paddingSize} from "../utils/Sizes";
const CountDown=({minutes=20,isPause=false})=>{
  return (
    <View>
    <Text style={styles.text}>CountDown is here</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  text:{
    backgroundColor:'rgba(94,132,226,0.3)',
    fontWeight:'bold',
    fontSize:fontSize.xxl,
    padding:paddingSize.md,
    color:'white'
  }
});
export default CountDown;