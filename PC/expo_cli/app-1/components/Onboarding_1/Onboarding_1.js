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
  title_image: {
    position: "absolute",
    top: "42%",
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  dot_image: {
    position: "absolute",
    top: "55%",
    width: "10%",
    height: "80%",
    resizeMode: "contain",
  },
  skip_image: {
    position: "absolute",
    bottom: "0.8%",
    left: "10%",
    width: "10%",
    resizeMode: "contain",
  },
  next_image: {
    position: "absolute",
    bottom: "1.7%",
    right: "10%",
    width: "10%",
    resizeMode: "contain",
  }
});

const Onboarding_1 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.phone_image} source={require("./images/Phone.png")} />
        <View style={styles.msg_background} />
        <Image style={styles.title_image} source={require("./images/Title.png")} />
        <Image style={styles.dot_image} source={require("./images/Dot.png")} />
        <Image style={styles.skip_image} source={require("./images/Skip.png")} />
        <Image style={styles.next_image} source={require("./images/Next.png")} />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding_1;
