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
  FlatList,
  ScrollView,

  Dimensions,
  useColorScheme,
} from "react-native";
import { useRoute } from '@react-navigation/native';
import S_n_button from "./../common//S_n_button";
import Svg, { Rect, Line, Circle, Path, G } from 'react-native-svg';

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
    <SafeAreaView style={[styles.container, { flex: 1 }, themeContainerStyle]}>
      <ScrollView contentContainerStyle={[themeContainerStyle]}>
        <StatusBar style={"light"} />
        <View style={{
          width: dwidth,
          height: dheight
        }} />
        <View style={{
          position: "absolute",
          backgroundColor: "#4A43EC",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          width: dwidth,
          height: .25 * dheight,
        }} />
        <View style={{
          position: "absolute",
          width: dwidth,
          top: .05 * dheight,
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
        <View style={{
          position: "absolute",
          width: dwidth,
          height: .12 * dwidth,
          top: .12 * dheight,
          justifyContent: "center",
        }}>
          <View style={{
            position: "absolute",
            width: .52 * dwidth,
            height: .12 * dwidth,
            left: .03 * dwidth,
            justifyContent: "center",
          }}>
            <View style={{
              position: "absolute",
              width: "100%",
              height: "70%",
              left: "4%",
            }}>
              <Svg width="70%" height="100%" viewBox="0 0 114 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <Path opacity="0.4" d="M22 23L17.65 18.65" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <Line opacity="0.4" x1="35.5" y1="4.5" x2="35.5" y2="23.5" stroke="#FFFFFF" strokeLinecap="round" />
              </Svg>
            </View>
            <View style={{
              position: "absolute",
              width: "60%",
              height: "60%",
              justifyContent: "center",
              left: "35%",
            }}>
              <Text style={{
                fontFamily: Poppins_Regular,
                fontSize: 20,
                color: "#FFFFFF",
                opacity: 0.4,
              }}>
                Search...
              </Text>
            </View>
          </View>
          <View style={{
            position: "absolute",
            width: .23 * dwidth,
            height: .13 * dwidth,
            right: .04 * dwidth,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Svg width="77" height="34" viewBox="0 0 77 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Rect opacity="0.1" x="1" y="1" width="75" height="32.1429" rx="16.0714" fill="#FFFFFF" />
              <Path opacity="0.4" d="M17.1623 7.28943C11.8416 7.28943 7.51263 11.6183 7.51263 16.9391C7.51263 22.2599 11.8416 26.5889 17.1623 26.5889C22.4831 26.5889 26.8121 22.2599 26.8121 16.9391C26.8121 11.6183 22.4831 7.28943 17.1623 7.28943ZM18.6469 21.3929H15.6778C15.4809 21.3929 15.2921 21.3146 15.1529 21.1754C15.0137 21.0362 14.9355 20.8474 14.9355 20.6506C14.9355 20.4537 15.0137 20.2649 15.1529 20.1257C15.2921 19.9865 15.4809 19.9083 15.6778 19.9083H18.6469C18.8438 19.9083 19.0326 19.9865 19.1718 20.1257C19.311 20.2649 19.3892 20.4537 19.3892 20.6506C19.3892 20.8474 19.311 21.0362 19.1718 21.1754C19.0326 21.3146 18.8438 21.3929 18.6469 21.3929ZM20.8738 18.4237H13.4509C13.2541 18.4237 13.0652 18.3455 12.926 18.2063C12.7868 18.0671 12.7086 17.8783 12.7086 17.6814C12.7086 17.4846 12.7868 17.2958 12.926 17.1565C13.0652 17.0173 13.2541 16.9391 13.4509 16.9391H20.8738C21.0706 16.9391 21.2594 17.0173 21.3986 17.1565C21.5379 17.2958 21.6161 17.4846 21.6161 17.6814C21.6161 17.8783 21.5379 18.0671 21.3986 18.2063C21.2594 18.3455 21.0706 18.4237 20.8738 18.4237ZM22.3583 15.4546H11.9663C11.7695 15.4546 11.5807 15.3764 11.4415 15.2372C11.3023 15.098 11.2241 14.9091 11.2241 14.7123C11.2241 14.5154 11.3023 14.3266 11.4415 14.1874C11.5807 14.0482 11.7695 13.97 11.9663 13.97H22.3583C22.5552 13.97 22.744 14.0482 22.8832 14.1874C23.0224 14.3266 23.1006 14.5154 23.1006 14.7123C23.1006 14.9091 23.0224 15.098 22.8832 15.2372C22.744 15.3764 22.5552 15.4546 22.3583 15.4546Z" fill="#FFFFFF" />
            </Svg>
          </View>
        </View>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{
            position: "absolute",
            top: .2 * dheight,
            height: .09 * dheight,
          }}
          contentContainerStyle={{
            alignItems: "center",
          }}>
          <View style={{ width: .05 * dwidth }} />
          <View style={[styles.label_button, { backgroundColor: '#F0635A', }]} />
          <View style={{ width: .05 * dwidth }} />
          <View style={[styles.label_button, { backgroundColor: '#F59762', }]} />
          <View style={{ width: .05 * dwidth }} />
          <View style={[styles.label_button, { backgroundColor: '#29D697', }]} />
          <View style={{ width: .05 * dwidth }} />
          <View style={[styles.label_button, { backgroundColor: '#46CDFB', }]} />
          <View style={{ width: .05 * dwidth }} />
        </ScrollView>
        <Text style={{
          position: "absolute",
          left: .08 * dwidth,
          top: .3 * dheight,
          fontFamily: Poppins_Medium,
          fontSize: 18,
        }}>
          Upcoming Events
        </Text>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{
            position: "absolute",
            // backgroundColor: "gray",
            top: .35 * dheight,
            height: .25 * dheight,
          }}
        >
          <View style={{ width: .025 * dwidth }} />
          <View style={[styles.content_thumb_back,]} >
            <View style={[styles.content_thumb,]} />
            <Text>
              Template
            </Text>
          </View>
          <View style={{ width: .05 * dwidth }} />
          <View style={[styles.content_thumb_back,]}>
            <View style={[styles.content_thumb,]} />
          </View>
          <View style={{ width: .05 * dwidth }} />
          <View style={[styles.content_thumb_back,]} >
            <View style={[styles.content_thumb,]} />
          </View>
          <View style={{ width: .05 * dwidth }} />
          <View style={[styles.content_thumb_back,]} >
            <View style={[styles.content_thumb,]} />
          </View>
          <View style={{ width: .025 * dwidth }} />
        </ScrollView>
        <View style={{
          position: "absolute",
          top: .73 * dheight,
          width: dwidth,
          alignItems: "center",
        }}>

          <View style={{
            backgroundColor: "skyblue",
            borderRadius: 20,
            width: .85 * dwidth,
            height: .3 * dwidth,
          }}>
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
  label_button: {
    width: .25 * dwidth,
    height: .1 * dwidth,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#5669FF',
  },
  content_thumb_back: {
    backgroundColor: "#FFFFFF",
    width: .4 * dwidth,
    height: .5 * dwidth,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'gray',
    alignItems: "center",
  },
  content_thumb: {
    top: "4%",
    width: "90%",
    height: "50%",
    backgroundColor: "lightgray",
    borderRadius: 15,
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
