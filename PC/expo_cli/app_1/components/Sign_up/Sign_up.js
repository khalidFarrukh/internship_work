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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  go_back_icon: {
    position: "absolute",
    top: "-40%",
    left: "7%",
    width: "6%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    position: "absolute",
    top: "-35%",
    left: "8%",
    width: "20%",
    height: "100%",
    resizeMode: "contain",
  },
  user_box: {
    position: "absolute",
    top: "-28%",
    width: "85%",
    height: "100%",
    resizeMode: "contain",
  },
  email_box: {
    position: "absolute",
    top: "-19%",
    width: "85%",
    height: "100%",
    resizeMode: "contain",
  },
  pass1_box: {
    position: "absolute",
    top: "-10%",
    width: "85%",
    height: "100%",
    resizeMode: "contain",
  },
  pass2_box: {
    position: "absolute",
    top: "-1%",
    width: "85%",
    height: "100%",
    resizeMode: "contain",
  },
  sign_up_button: {
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
  have_sign_in: {
    position: "absolute",
    top: "43%",
    left:"8%",
    width: "80%",
    height: "100%",
    resizeMode: "contain",
  }
});

const Sign_up = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.bg_tr} source={require("./images/b_t_r.png")} />
        <Image style={styles.bg_dr} source={require("./images/b_d_r.png")} />
        <Image style={styles.bg_tl} source={require("./images/b_t_l.png")} />
        <Image style={styles.bg_dl} source={require("./images/b_d_l.png")} />
        <Image style={styles.go_back_icon} source={require("./images/back.png")} />
        <Image style={styles.title} source={require("./images/sign_up.png")} />
        <Image style={styles.user_box} source={require("./images/username_box.png")} />
        <Image style={styles.email_box} source={require("./images/email_box.png")} />
        <Image style={styles.pass1_box} source={require("./images/password_box.png")} />
        <Image style={styles.pass2_box} source={require("./images/password_box.png")} />
        <Image style={styles.sign_up_button} source={require("./images/button_sign_up.png")} />
        <Image style={styles.or} source={require("./images/or.png")} />
        <Image style={styles.login_with_google} source={require("./images/login_with_google.png")} />
        <Image style={styles.login_with_facebook} source={require("./images/login_with_facebook.png")} />
        <Image style={styles.have_sign_in} source={require("./images/have_sign_in.png")} />
      </View>
    </SafeAreaView>
  );
};

export default Sign_up;
