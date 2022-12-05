import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { useFonts } from 'expo-font';
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";
import { useRoute } from '@react-navigation/native';
import S_n_button from "./../common//S_n_button";

const Poppins_Thin = "Poppins_100Thin";
const Poppins_ExtraLight = "Poppins_200ExtraLight";
const Poppins_Light = "Poppins_300Light";
const Poppins_Regular = "Poppins_400Regular";
const Poppins_Medium = "Poppins_500Medium";
const Poppins_SemiBold = "Poppins_600SemiBold";
const Poppins_Bold = "Poppins_700Bold";

const Onboarding_1 = ({ navigation }) => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setBackgroundColorAsync('#ffffff00');
  let [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.phone_image} source={require("./images/Phone.png")} />
        <View style={{
          position: "absolute",
          backgroundColor: "#5669FF",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          top: "67%",
          width: "100%",
          height: "33%",
          resizeMode: "contain",
        }} />
        <View style={{
          flex: 1,
          alignItems: "center",
        }}>
          <Text style={{
            position: "absolute",
            top: "71%",
            fontFamily: Poppins_Medium,
            fontSize: 22,
            color: "white",
          }}>Explore Upcoming and</Text>
          <Text style={{
            position: "absolute",
            top: "75%",
            fontFamily: Poppins_Medium,
            fontSize: 22,
            color: "white",
          }}>Nearby Events</Text>

          <Text style={{
            position: "absolute",
            top: "81%",
            fontFamily: Poppins_Light,
            fontSize: 15,
            color: "white",
            opacity: 0.8,
          }}>In publishing and graphic design, Lorem is</Text>

          <Text style={{
            position: "absolute",
            top: "84%",
            fontFamily: Poppins_Light,
            fontSize: 15,
            color: "white",
            opacity: 0.8,
          }}>a placeholder text commonly</Text>
        </View>
        <Image style={{
          position: "absolute",
          top: "91%",
          width: "10%",
          resizeMode: "contain",
        }} source={require("./images/Dot.png")} />

        <S_n_button position={"absolute"} value={"Skip"} fontcolor={"white"} fontfamily={Poppins_Medium} op={0.5} top={"91%"} left={"8%"} fontsize={18} />
        <S_n_button position={"absolute"} value={"Next"} fontcolor={"white"} fontfamily={Poppins_Medium} top={"91%"} left={"82%"} fontsize={18} />

      </View>
    </SafeAreaView >
  );
  // }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  phone_image: {
    position: "absolute",
    top: "-10%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default Onboarding_1;
