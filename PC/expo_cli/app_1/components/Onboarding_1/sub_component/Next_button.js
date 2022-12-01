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
  skip_image: {
    position: "absolute",
    width: "10%",
    left: "10%",
    resizeMode: "contain",
  },
  next_image: {
    position: "absolute",
    width: "10%",
    right: "10%",
    resizeMode: "contain",
  },
});

export default Onboarding_1;
