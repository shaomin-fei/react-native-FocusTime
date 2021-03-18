import * as React from 'react';
import { View, StyleSheet,Text,Platform } from 'react-native';

import Focus from "./src/features/Focus";
import Timer from "./src/features/timer/timer";

export default function App() {
  const [focusThing,setFocusThing]=React.useState("11");
  return (
    <View style={styles.container}>
     <Focus setFocusThing={setFocusThing}/>
     <Timer focusThing={focusThing}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'blue',
    padding: Platform.OS==='IOS'?8:16,
  },
 
});
