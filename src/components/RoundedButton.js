import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
const RoundedButton = ({ textStyle={}, size=120, style={}, ...props }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles(size).buttonStyle, style]}
        onPress={props.onPress}
        >
        <Text style={[styles(size).textStyle,textStyle]}>{props.buttonText}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = (size) =>
  StyleSheet.create({
    buttonStyle: {
      borderRadius: size / 2,
      width:size,
      height:size,
      alignItems:"center",
      borderWidth:2,
      borderColor:'white',
      justifyContent:'center',
      marginLeft:15
    },
    textStyle:{
      color:'white',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20
    }
  });
export default RoundedButton;