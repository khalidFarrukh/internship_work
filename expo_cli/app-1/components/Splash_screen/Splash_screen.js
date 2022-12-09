import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import React, { useState, useTheme } from "react";
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  useColorScheme,
} from "react-native";

const Splash_screen = ({ navigation }) => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  NavigationBar.setBackgroundColorAsync(themeContainerStyle.backgroundColor);
  const [count, setCount] = useState(0);
  if (count == 0) {
    setTimeout(() => navigation.replace("Onboarding_1"), 3000);
    setCount(1);
  }
  return (
    <SafeAreaView style={[{ flex: 1 }, themeContainerStyle]}>
      <View style={[styles.container, themeContainerStyle]}>
        <StatusBar style="auto" />
        <Image style={styles.s_logo} source={require("./images/s_l.png")} />
        <Image style={styles.s_bg_tr} source={require("./images/s_b_t_r.png")} />
        <Image style={styles.s_bg_dr} source={require("./images/s_b_d_r.png")} />
        <Image style={styles.s_bg_dl} source={require("./images/s_b_d_l.png")} />
      </View>
    </SafeAreaView >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  s_logo: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "50%",
    // height: 138,
    resizeMode: "contain",
  },
  s_bg_tr: {
    position: "absolute",
    top: "-45%",
    right: "-35%",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  s_bg_dr: {
    position: "absolute",
    top: "35%",
    right: "-60%",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  s_bg_dl: {
    position: "absolute",
    top: "40%",
    right: "40%",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
export default Splash_screen;
