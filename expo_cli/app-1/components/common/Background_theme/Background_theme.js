import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Background_theme = ({ route_name }) => {
  return (
    <>
      <Image style={{
        position: "absolute",
        top: -.50 * dheight,
        right: -.35 * dwidth,
        width: dwidth,
        height: dheight,
        resizeMode: "contain",
      }} source={require("./images/b_t_r.png")} />

      <Image style={{
        position: "absolute",
        top: .35 * dheight,
        right: -.65 * dwidth,
        width: dwidth,
        height: dheight,
        resizeMode: "contain",
      }} source={require("./images/b_d_r.png")} />

      {
        route_name == "Sign_up" || route_name == "Verification" || route_name == "Reset_password1" || route_name == "Reset_password2" ? null : <Image style={{
          position: "absolute",
          top: -.35 * dheight,
          left: -.35 * dwidth,
          width: dwidth,
          height: dheight,
          resizeMode: "contain",
        }} source={require("./images/b_t_l.png")} />
      }
      <Image style={{
        position: "absolute",
        top: .50 * dheight,
        left: -.50 * dwidth,
        width: dwidth,
        height: dheight,
        resizeMode: "contain",
      }} source={require("./images/b_d_l.png")} />
    </>
  );
};

const styles = StyleSheet.create({

});

export default Background_theme;
