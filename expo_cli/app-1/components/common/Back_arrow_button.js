import React from "react";
import Svg, { Path } from 'react-native-svg';
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  BackHandler,
} from "react-native";

export default function Back_arrow_button({ route_name, color, navigation, position, width, top, left }) {
  return (
    <>
      <Pressable onPress={() => {
        if (route_name == "Sign_up" || route_name == "Reset_password1") {
          navigation.replace("Sign_in");
        }
        else if (route_name == "Verification") {
          navigation.replace("Reset_password1");
        }
        else if (route_name == "Reset_password2") {
          navigation.replace("Verification");
        }
      }} style={[{ aspectRatio: 1, }, { position: "absolute", width: width, top: top, left: "8%", }]}>
        <Svg width="100%" height="100%" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M18.7833 8.25H1.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M8.25 14.75L1.75 8.25L8.25 1.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

      </Pressable>
    </>
  );
}
