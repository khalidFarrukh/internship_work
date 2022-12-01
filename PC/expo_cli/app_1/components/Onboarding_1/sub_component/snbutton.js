import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import React, { useState } from "react";
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

const Onboarding_1 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <Image style={styles.phone_image} source={require("./images/Phone.png")} />
        <View style={styles.msg_background} />
        <Image style={styles.title_image} source={require("./images/Title.png")} />
        <Image style={styles.dot_image} source={require("./images/Dot.png")} />
        <Image style={styles.skip_image} source={require("./images/Skip.png")} />
        <View style={styles.button0}>
          <Pressable delayPressIn={0} onPress={() => navigation.navigate('Sign_in')}>
            <Image style={styles.skip_image} source={require("./images/Skip.png")} />
          </Pressable>
        </View>
        <View style={styles.button1}>
          <Pressable delayPressIn={0} onPress={() => navigation.navigate('Onboarding_2')}>
            <Image style={styles.next_image} source={require("./images/Next.png")} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView >
  );
};
const styles = StyleSheet.create({
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
