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
import { useRoute } from '@react-navigation/native';
import React, { useState } from "react";
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Switch,
  Pressable,
} from "react-native";

import Background_theme from "../common/Background_theme/Background_theme";
import Eventhub_logo from "./sub_components/Eventhub_logo";
import Left_heading from "../common/Left_heading";
import User_field from "../common/User_field";
import Password_field from "../common/Password_field";
import Remember_and_forget from "../common/Remember_and_forget";
import Theme_button from "../common/Theme_button";
import OR from "../common/OR";
import Footer_question from "../common/Footer_question";

const Poppins_Thin = "Poppins_100Thin";
const Poppins_ExtraLight = "Poppins_200ExtraLight";
const Poppins_Light = "Poppins_300Light";
const Poppins_Regular = "Poppins_400Regular";
const Poppins_Medium = "Poppins_500Medium";
const Poppins_SemiBold = "Poppins_600SemiBold";
const Poppins_Bold = "Poppins_700Bold";

const Sign_in = ({ navigation }) => {
  // NavigationBar.setVisibilityAsync("hidden");
  // NavigationBar.setBehaviorAsync("overlay-swipe");
  // NavigationBar.setBackgroundColorAsync('#ffffff00');
  const route = useRoute().name;

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
        <Background_theme route_name={route} />
        <Eventhub_logo position={"absolute"} width={"15%"} top={"10%"} fontfamily={Poppins_Medium} />
        <Left_heading value={"Sign in"} fontfamily={Poppins_Medium} top={"25%"} />
        <User_field fontfamily={Poppins_Medium} top={"32%"} />
        <Password_field fontfamily={Poppins_Medium} top={"40%"} />
        <Remember_and_forget fontfamily={Poppins_Light} top={"46%"} />
        <Theme_button value={"SIGN IN"} fontfamily={Poppins_Medium} />
        <OR fontfamily={Poppins_Medium} navigation={navigation} />
        <Footer_question
          value1={"Don't have an account?"}
          value2={"Sign up"}
          fontfamily={Poppins_Medium}
        />
      </View >
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Sign_in;
