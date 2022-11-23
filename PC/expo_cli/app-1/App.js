import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import Splash_screen from "./components/Splash_screen/Splash_screen";
import Onboarding_1 from "./components/Onboarding_1/Onboarding_1";
import Onboarding_2 from "./components/Onboarding_2/Onboarding_2";
import Onboarding_3 from "./components/Onboarding_3/Onboarding_3";
import Sign_in from "./components/Sign_in/Sign_in";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  splash_image: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "50%",
    height: 138,
    resizeMode: "contain",
  },
});

export default function App() {
  return <Sign_in />;
}
