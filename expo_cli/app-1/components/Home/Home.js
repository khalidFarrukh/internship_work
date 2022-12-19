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
  ScrollView,
  Dimensions,
  useColorScheme,
} from "react-native";
import { useRoute } from '@react-navigation/native';
import S_n_button from "./../common//S_n_button";
import Svg, { Circle, Path, G } from 'react-native-svg';

const Poppins_Thin = "Poppins_100Thin";
const Poppins_ExtraLight = "Poppins_200ExtraLight";
const Poppins_Light = "Poppins_300Light";
const Poppins_Regular = "Poppins_400Regular";
const Poppins_Medium = "Poppins_500Medium";
const Poppins_SemiBold = "Poppins_600SemiBold";
const Poppins_Bold = "Poppins_700Bold";

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Home = (props) => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  NavigationBar.setBackgroundColorAsync(themeContainerStyle.backgroundColor);
  // const route = useRoute().name;
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
        <StatusBar style={"light"} />
        <View style={{
          width: dwidth,
          height: dheight
        }} />
        <View style={{
          position: "absolute",
          backgroundColor: "#5669FF",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          width: dwidth,
          height: .25 * dheight,
          resizeMode: "contain",
        }} />
        <View style={{
          position: "absolute",
          // height: .04 * dheight,
          width: dwidth,
          top: .07 * dheight,
          // backgroundColor: "red",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}>
          <View style={{
            width: dwidth,
            left: .03 * dwidth,
          }}>
            <View style={{
              width: .06 * dheight,
              height: .06 * dheight,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <View style={{
                width: "50%",
                height: "50%",
              }}>
                <View style={[{ aspectRatio: 1, }, { width: "100%", height: "100%", }]}>
                  <Svg width="100%" height="100%" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G opacity="0.94">
                      <Path fillRule="evenodd" clipRule="evenodd" d="M0 1.2C0 0.537258 0.537258 0 1.2 0H22.8C23.4627 0 24 0.537258 24 1.2C24 1.86274 23.4627 2.4 22.8 2.4H1.2C0.537258 2.4 0 1.86274 0 1.2ZM0 9.59992C0 8.93718 0.537259 8.39992 1.2 8.39992H16.8C17.4627 8.39992 18 8.93718 18 9.59992C18 10.2627 17.4627 10.7999 16.8 10.7999H1.2C0.537259 10.7999 0 10.2627 0 9.59992ZM1.2 16.8C0.537258 16.8 0 17.3373 0 18C0 18.6628 0.537258 19.2 1.2 19.2H22.8C23.4627 19.2 24 18.6628 24 18C24 17.3373 23.4627 16.8 22.8 16.8H1.2Z" fill="white" />
                    </G>
                  </Svg>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            width: dwidth,
            right: .03 * dwidth + (.07 * dheight),
          }}>
            <View style={{
              width: .05 * dheight,
              height: .05 * dheight,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <View style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "#FFFFFF",
                opacity: 0.1,
                borderRadius: 50,
              }} />
              <View style={{
                position: "absolute",
                width: "90%",
                height: "90%",
              }}>
                <View style={[{ aspectRatio: 1, }, { width: "100%", height: "100%", }]}>
                  <Svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M23 14.6666C23 11.9052 20.7614 9.66663 18 9.66663C15.2386 9.66663 13 11.9052 13 14.6666C13 20.5 10.5 22.1666 10.5 22.1666H25.5C25.5 22.1666 23 20.5 23 14.6666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <Path d="M19.4417 25.5C19.1435 26.014 18.5942 26.3304 18 26.3304C17.4058 26.3304 16.8565 26.014 16.5583 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </Svg>
                </View>
              </View>
              {
                1 ?
                  < View style={{
                    position: "absolute",
                    width: "20%",
                    height: "20%",
                    top: "25%",
                    right: "30%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <View style={{
                      width: "100%",
                      height: "100%",
                    }}>
                      <View style={[{ aspectRatio: 1, }, { width: "100%", height: "100%", }]}>
                        <Svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <Circle cx="4.5" cy="4.5" r="3.5" fill="#02E9FE" stroke="#524CE0" strokeWidth="2" />
                        </Svg>
                      </View>
                    </View>
                  </View>
                  : null
              }

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  phone_image: {
    position: "absolute",
    top: -.10 * dheight,
    width: dwidth,
    height: dheight,
    resizeMode: "contain",
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#120D26',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});

export default Home;
