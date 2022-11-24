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
  view_row: {
    alignSelf: "center",
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
    alignSelf: 'center',
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
  numpad_background: {
    position: "absolute",
    backgroundColor: "#D2D5DB",
    bottom: "-70%",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  key_button: {
    position: "absolute",
    width: "30%",
    height: "100%",
    resizeMode: "contain",
  },
  key_1: {
    bottom: "-24%",
    left: "2.5%",
  },
  key_2: {
    bottom: "-24%",
    left: "35%",
  },
  key_3: {
    bottom: "-24%",
    right: "2.5%",
  },
  key_4: {
    bottom: "-31%",
    left: "2.5%",
  },
  key_5: {
    bottom: "-31%",
    left: "35%",
  },
  key_6: {
    bottom: "-31%",
    right: "2.5%",
  },
  key_7: {
    bottom: "-38%",
    left: "2.5%",
  },
  key_8: {
    bottom: "-38%",
    left: "35%",
  },
  key_9: {
    bottom: "-38%",
    right: "2.5%",
  },
  key_0: {
    bottom: "-45%",
    right: "35%",
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
        <View style={styles.numpad_background} />
        <Image style={[styles.key_button, styles.key_1]} source={require("./images/1.png")} />
        <Image style={[styles.key_button, styles.key_2]} source={require("./images/2.png")} />
        <Image style={[styles.key_button, styles.key_3]} source={require("./images/3.png")} />
        <Image style={[styles.key_button, styles.key_4]} source={require("./images/4.png")} />
        <Image style={[styles.key_button, styles.key_5]} source={require("./images/5.png")} />
        <Image style={[styles.key_button, styles.key_6]} source={require("./images/6.png")} />
        <Image style={[styles.key_button, styles.key_7]} source={require("./images/7.png")} />
        <Image style={[styles.key_button, styles.key_8]} source={require("./images/8.png")} />
        <Image style={[styles.key_button, styles.key_9]} source={require("./images/9.png")} />
        <Image style={[styles.key_button, styles.key_0]} source={require("./images/0.png")} />
        <Image style={[styles.delete_button]} source={require("./images/Delete.png")} />
      </View>
    </SafeAreaView >
  );
};

export default Verification;
