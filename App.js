import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import StackNav from "./navigation/stackNav";
import {View, SafeAreaView, Platform, StatusBar} from "react-native";

export default function App(){
  return(
    <View style={{flex:1}}>
      <SafeAreaView style={{marginTop : Platform.OS == "android"?St.currentHeight:0}}/>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </View>
  )
}

