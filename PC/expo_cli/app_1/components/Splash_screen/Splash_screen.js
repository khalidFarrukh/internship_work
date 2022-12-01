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
} from "react-native";

const Splash_screen = ({ navigation }) => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setBackgroundColorAsync('#ffffff00')
  const [count, setCount] = useState(0);
  if (count == 1) {
    setTimeout(() => navigation.navigate("Onboarding_1"), 1000);
  }
  else {
    setCount(count + 1);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
