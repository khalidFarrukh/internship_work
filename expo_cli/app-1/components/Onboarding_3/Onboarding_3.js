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
import React, { useState } from "react";
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  ScrollView,
  Dimensions,
  useColorScheme,
} from "react-native";
import { useRoute } from '@react-navigation/native';
import S_n_button from "./../common/S_n_button";

const Poppins_Thin = "Poppins_100Thin";
const Poppins_ExtraLight = "Poppins_200ExtraLight";
const Poppins_Light = "Poppins_300Light";
const Poppins_Regular = "Poppins_400Regular";
const Poppins_Medium = "Poppins_500Medium";
const Poppins_SemiBold = "Poppins_600SemiBold";
const Poppins_Bold = "Poppins_700Bold";

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Onboarding_3 = ({ navigation }) => {
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
        <Image style={styles.phone_image} source={require("./images/Phone.png")} />
        <View style={{
          position: "absolute",
          backgroundColor: "#5669FF",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          top: .67 * dheight,
          width: dwidth,
          height: .33 * dheight,
          resizeMode: "contain",
        }} />
        <Text style={{
          position: "absolute",
          top: .71 * dheight,
          fontFamily: Poppins_Medium,
          fontSize: 22,
          color: "white",
        }}>Explore Upcoming and</Text>
        <Text style={{
          position: "absolute",
          top: .75 * dheight,
          fontFamily: Poppins_Medium,
          fontSize: 22,
          color: "white",
        }}>Nearby Events</Text>

        <Text style={{
          position: "absolute",
          top: .81 * dheight,
          fontFamily: Poppins_Light,
          fontSize: 15,
          color: "white",
          opacity: 0.8,
        }}>In publishing and graphic design, Lorem is</Text>

        <Text style={{
          position: "absolute",
          top: .84 * dheight,
          fontFamily: Poppins_Light,
          fontSize: 15,
          color: "white",
          opacity: 0.8,
        }}>a placeholder text commonly</Text>
        <Image style={{
          position: "absolute",
          top: .91 * dheight,
          width: .10 * dwidth,
          resizeMode: "contain",
        }} source={require("./images/Dot.png")} />

        <S_n_button route_name={route} navigation={navigation} position={"absolute"} value={"Skip"} fontcolor={"white"} fontfamily={Poppins_Medium} op={0.5} top={.91 * dheight} left={"8%"} fontsize={18} />
        <S_n_button route_name={route} navigation={navigation} position={"absolute"} value={"Next"} fontcolor={"white"} fontfamily={Poppins_Medium} top={.91 * dheight} left={"82%"} fontsize={18} />

      </ScrollView>
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
  phone_image: {
    position: "absolute",
    top: "-10%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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

export default Onboarding_3;
