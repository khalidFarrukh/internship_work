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
import Svg, { Circle } from 'react-native-svg';

const Sign_in = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.bg_tr} source={require("./images/b_t_r.png")} />
        <Image style={styles.bg_dr} source={require("./images/b_d_r.png")} />
        <Image style={styles.bg_tl} source={require("./images/b_t_l.png")} />
        <Image style={styles.bg_dl} source={require("./images/b_d_l.png")} />
        <Image style={styles.brand_logo} source={require("./images/eventhub_logo.png")} />
        <Image style={styles.title} source={require("./images/sign_in.png")} />
        <Image style={styles.user_box} source={require("./images/username_box.png")} />
        <Image style={styles.pass_box} source={require("./images/password_box.png")} />
        <Image style={styles.sliding_button} source={require("./images/button_off.png")} />
        <Image style={styles.rmmbr_me} source={require("./images/remember_me.png")} />
        <Image style={styles.frgt_pswd} source={require("./images/forgot_password.png")} />
        <Image style={styles.sign_in_button} source={require("./images/button_sign_in.png")} />
        <Image style={styles.or} source={require("./images/or.png")} />
        <Image style={styles.login_with_google} source={require("./images/login_with_google.png")} />
        <Image style={styles.login_with_facebook} source={require("./images/login_with_facebook.png")} />
        <Image style={styles.not_signed_up} source={require("./images/not_signed_up.png")} />
      </View >
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",

  },
  column: {
    flexDirection: 'column',
    alignItems: "center",
    width: '50%',
  },
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
  brand_logo: {
    position: "absolute",
    top: "-35%",
    width: "40%",
    height: "100%",

    resizeMode: "contain",
  },
  title: {
    position: "absolute",
    top: "-23%",
    left: "8%",
    width: "20%",
    height: "100%",
    resizeMode: "contain",
  },
  user_box: {
    position: "absolute",
    top: "-15%",
    width: "85%",
    height: "100%",
    resizeMode: "contain",
  },
  pass_box: {
    position: "absolute",
    top: "-5%",
    width: "85%",
    height: "100%",
    resizeMode: "contain",
  },
  sliding_button: {
    position: "absolute",
    top: "2%",
    left: "8%",
    width: "8%",
    height: "100%",
    resizeMode: "contain",
  },
  rmmbr_me: {
    position: "absolute",
    top: "2%",
    left: "18%",
    width: "25%",
    height: "100%",
    resizeMode: "contain",
  },
  frgt_pswd: {
    position: "absolute",
    top: "2%",
    right: "8%",
    width: "30%",
    height: "100%",
    resizeMode: "contain",
  },
  sign_in_button: {
    position: "absolute",
    top: "11%",
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  or: {
    position: "absolute",
    top: "17%",
    width: "7%",
    height: "100%",
    resizeMode: "contain",
  },
  login_with_google: {
    position: "absolute",
    top: "25%",
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  login_with_facebook: {
    position: "absolute",
    top: "35%",
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  not_signed_up: {
    position: "absolute",
    top: "43%",
    left: "8%",
    width: "80%",
    height: "100%",
    resizeMode: "contain",
  }
});

export default Sign_in;
