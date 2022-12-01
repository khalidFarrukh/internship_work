import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import * as splashscreen from 'expo-splash-screen';
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
  NavigationBar.setBackgroundColorAsync('#ffffff00')
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  useEffect(() => {
    async function prepare() {
      await splashscreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{
            alignSelf: "center",
          }}>Loading</Text>
        </View>
      </SafeAreaView>
    )
  } else {
    splashscreen.hideAsync();
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <StatusBar style="auto" /> */}
          <Image style={styles.phone_image} source={require("./images/Phone.png")} />
          <View style={styles.msg_background} />
          <View style={{
            width: "50%",
          }}>
            <Text style={styles.title}>Explore Upcoming and Nearby Events</Text>
          </View>
          <Image style={styles.dot_image} source={require("./images/Dot.png")} />
          {/* <Image style={styles.skip_image} source={require("./images/Skip.png")} /> */}
          <View style={styles.button0}>
            <Pressable delayPressIn={0} onPress={() => navigation.navigate('Sign_in')}>
              <Text>Skip</Text>
              {/* <Image style={styles.skip_image} source={require("./images/Skip.png")} /> */}
            </Pressable>
          </View>
          <View style={styles.button1}>
            <Pressable delayPressIn={0} onPress={() => navigation.navigate('Onboarding_2')}>
              {/* <Image style={styles.next_image} source={require("./images/Next.png")} /> */}
            </Pressable>
          </View>
        </View>
      </SafeAreaView >
    );
  }
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
  msg_background: {
    position: "absolute",
    backgroundColor: "#5669FF",
    borderRadius: 40,
    top: "70%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    position: "absolute",
    fontFamily: Poppins_Medium,
    fontSize: 25,
  },
  dot_image: {
    position: "absolute",
    top: "55%",
    width: "10%",
    height: "80%",
    resizeMode: "contain",
  },
  button0: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "90.7%",
  },
  skip_image: {
    position: "absolute",
    width: "10%",
    left: "10%",
    resizeMode: "contain",
  },
  button1: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "91.5%",
  },
  next_image: {
    position: "absolute",
    width: "10%",
    right: "10%",
    resizeMode: "contain",
  },
});

export default Onboarding_1;
