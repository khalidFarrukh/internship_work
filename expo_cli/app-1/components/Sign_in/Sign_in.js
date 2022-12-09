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

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Sign_in = ({ navigation }) => {
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
        }}>
        </View>
        <Background_theme route_name={route} />
        <Eventhub_logo
          position={"absolute"}
          width={.15 * dwidth}
          top={.10 * dheight}
          text_color={themeTextStyle.color}
          fontfamily={Poppins_Medium}
        />
        <Left_heading value={"Sign in"} text_color={themeTextStyle.color} fontfamily={Poppins_Medium} top={.25 * dheight} left={.08 * dwidth} />
        <User_field fontfamily={Poppins_Medium} top={.32 * dheight} />
        <Password_field fontfamily={Poppins_Medium} top={.40 * dheight} />
        <Remember_and_forget navigation={navigation} fontfamily={Poppins_Light} top={.46 * dheight} />
        <Theme_button value={"SIGN IN"} fontfamily={Poppins_Medium} top={.55 * dheight} />
        <OR fontfamily={Poppins_Medium} navigation={navigation} />
        <Footer_question
          navigation={navigation}
          value1={"Don't have an account?"}
          value2={"Sign up"}
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
    color: 'white',
  },
});

export default Sign_in;
