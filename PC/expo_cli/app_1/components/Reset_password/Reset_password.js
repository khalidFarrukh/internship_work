import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  Animated,
  Keyboard,
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
    alignContent: "center",
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
    width: "35%",
    height: "100%",
    resizeMode: "contain",
  },
  title_detail: {
    position: "absolute",
    top: "-28.5%",
    left: "8%",
    width: "65%",
    height: "100%",
    resizeMode: "contain",
  },
  email_box: {
    position: "absolute",
    top: "-18.5%",
    width: "85%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  send_button: {
    position: "absolute",
    top: "-5.5%",
    width: "90%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});

const Reset_password = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.bg_tr} source={require("./images/b_t_r.png")} />
        <Image style={styles.bg_dr} source={require("./images/b_d_r.png")} />
        <Image style={styles.bg_tl} source={require("./images/b_t_l.png")} />
        <Image style={styles.bg_dl} source={require("./images/b_d_l.png")} />
        <Image style={styles.go_back_icon} source={require("./images/back.png")} />
        <Image style={styles.title} source={require("./images/reset_password.png")} />
        <Image style={styles.title_detail} source={require("./images/reset_password_detail.png")} />
        <Image style={styles.email_box} source={require("./images/email_box.png")} />
        <Image style={styles.send_button} source={require("./images/button_send.png")} />
      </View>
    </SafeAreaView >
  );
};

export default Reset_password;
