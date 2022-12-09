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
  ScrollView,
  Dimensions,
  useColorScheme,
} from "react-native";

import Background_theme from "../common/Background_theme/Background_theme";
import Back_arrow_button from "../common/Back_arrow_button";
import Left_heading from "../common/Left_heading";
import User_and_mail_field from "../common/User_and_mail_field";
import Mail_field from "../common/Mail_field";
import Password_field from "../common/Password_field";
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

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Sign_up = ({ navigation }) => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  NavigationBar.setBackgroundColorAsync(themeContainerStyle.backgroundColor);
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
    <SafeAreaView style={[{ flex: 1 }, themeContainerStyle]}>
      <ScrollView contentContainerStyle={[styles.container, themeContainerStyle]}>
        <StatusBar style="auto" />
        <View style={{
          width: dwidth,
          height: dheight
        }} />
        <Background_theme route_name={route} />
        <Back_arrow_button route_name={route} color={themeTextStyle.color} navigation={navigation} width={.05 * dwidth} top={.08 * dheight} />
        <Left_heading value={"Sign up"} text_color={themeTextStyle.color} fontfamily={Poppins_Medium} top={.12 * dheight} left={.08 * dwidth} />
        <User_and_mail_field placeholder={"Your username"} icon={"user"} fontfamily={Poppins_Medium} top={.2 * dheight} />
        <User_and_mail_field placeholder={"abc@email.com"} icon={"mail"} fontfamily={Poppins_Medium} top={.28 * dheight} />
        <Password_field placeholder={"Your password"} fontfamily={Poppins_Medium} top={.36 * dheight} />
        <Password_field placeholder={"Confirm password"} fontfamily={Poppins_Medium} top={.44 * dheight} />
        <Theme_button value={"SIGN UP"} fontfamily={Poppins_Medium} top={.55 * dheight} />
        <OR fontfamily={Poppins_Medium} navigation={navigation} />
        <Footer_question
          navigation={navigation}
          value1={"Already have an account?"}
          value2={"Sign in"}
          fontfamily={Poppins_Medium}
        />
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#120D26',
  },
  lightThemeText: {
    color: 'black',
  },
  darkThemeText: {
    color: '#FFFFFF',
  },
});
export default Sign_up;
