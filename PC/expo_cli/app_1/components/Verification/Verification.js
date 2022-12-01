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
    alignContent: "center",
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
  box_input_field_1: {
    position: "absolute",
    top: "-18.5%",
    left: "11%",
    width: "14%",
    height: "100%",
    resizeMode: "contain",
  },
  box_input_field_2: {
    position: "absolute",
    top: "-18.5%",
    left: "32%",
    width: "14%",
    height: "100%",
    resizeMode: "contain",
  },
  box_input_field_3: {
    position: "absolute",
    top: "-18.5%",
    left: "53%",
    width: "14%",
    height: "100%",
    resizeMode: "contain",
  },
  box_input_field_4: {
    position: "absolute",
    top: "-18.5%",
    left: "74%",
    width: "14%",
    height: "100%",
    resizeMode: "contain",
  },

  continue_button: {
    position: "absolute",
    top: "-5.5%",
    width: "90%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  resend_code_in: {
    width: "60%",
    left: "37%",
    resizeMode: "contain",
  },
  text_counter: {
    fontSize: 17,
    right: "20%",
    color: "blue",
  },
});

const Verification = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.bg_tr} source={require("./images/b_t_r.png")} />
        <Image style={styles.bg_dr} source={require("./images/b_d_r.png")} />
        <Image style={styles.bg_tl} source={require("./images/b_t_l.png")} />
        <Image style={styles.bg_dl} source={require("./images/b_d_l.png")} />
        <Image style={styles.go_back_icon} source={require("./images/back.png")} />
        <Image style={styles.title} source={require("./images/verification.png")} />
        <Image style={styles.title_detail} source={require("./images/verification_detail.png")} />
        <Image style={styles.box_input_field_1} source={require("./images/current_field.png")} />
        <Image style={styles.box_input_field_2} source={require("./images/empty_field.png")} />
        <Image style={styles.box_input_field_3} source={require("./images/empty_field.png")} />
        <Image style={styles.box_input_field_4} source={require("./images/empty_field.png")} />
        <Image style={styles.continue_button} source={require("./images/button_continue.png")} />
        <View style={styles.row}>
          <View style={styles.column}>
            <Image style={styles.resend_code_in} source={require("./images/resend_code_in.png")} />
          </View>
          <View style={styles.column}>
            <Text style={styles.text_counter}>30</Text>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
};

export default Verification;
