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
} from "react-native";

export default function Back_arrow_button({ position, width, top, left }) {

  return (
    <>
      <Pressable style={[{ aspectRatio: 1, }, { position: "absolute", width: "10%", top: "8%", left: "8%", }]}>
        <Svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M18.7833 8.25H1.75" stroke="#120D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M8.25 14.75L1.75 8.25L8.25 1.75" stroke="#120D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>
    </>
  );
}
