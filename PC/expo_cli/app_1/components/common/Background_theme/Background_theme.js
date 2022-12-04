import { StatusBar } from "expo-status-bar";
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
} from "react-native";

const Background_theme = () => {
  return (
    <>
      <Image style={styles.bg_tr} source={require("./images/b_t_r.png")} />
      <Image style={styles.bg_dr} source={require("./images/b_d_r.png")} />
      <Image style={styles.bg_tl} source={require("./images/b_t_l.png")} />
      <Image style={styles.bg_dl} source={require("./images/b_d_l.png")} />
    </>
  );
};

const styles = StyleSheet.create({
  bg_tr: {
    position: "absolute",
    top: "-50%",
    right: "-35%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  bg_dr: {
    position: "absolute",
    top: "35%",
    right: "-65%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  bg_tl: {
    position: "absolute",
    top: "-35%",
    left: "-35%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  bg_dl: {
    position: "absolute",
    top: "50%",
    left: "-50%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default Background_theme;
