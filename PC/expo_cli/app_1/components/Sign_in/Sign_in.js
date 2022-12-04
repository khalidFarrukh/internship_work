import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { useFonts } from 'expo-font';
// import { Input, Icon } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';

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
  Switch,
  Pressable,
} from "react-native";
import Background_theme from "../common/Background_theme/Background_theme";
import Eventhub_logo from "./sub_components/Eventhub_logo";

const Poppins_Thin = "Poppins_100Thin";
const Poppins_ExtraLight = "Poppins_200ExtraLight";
const Poppins_Light = "Poppins_300Light";
const Poppins_Regular = "Poppins_400Regular";
const Poppins_Medium = "Poppins_500Medium";
const Poppins_SemiBold = "Poppins_600SemiBold";
const Poppins_Bold = "Poppins_700Bold";

import Svg, { Path } from 'react-native-svg';

const Sign_in = () => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setBackgroundColorAsync('#ffffff00');
  const [text, onChangeText] = useState("");
  const [eyechange, setEyechange] = useState("eye");
  const [remember_me, setRemember_me] = useState(false);

  let [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Background_theme />
        <Eventhub_logo style={{ position: "absolute", width: "15%", top: "10%", }} />

        <Text style={{
          position: "absolute",
          top: "18%",
          fontFamily: Poppins_Medium,
          fontSize: 30,
          color: "Black",
        }}>EventHub</Text>

        <Text style={{
          position: "absolute",
          top: "25%",
          left: "8%",
          fontFamily: Poppins_Medium,
          fontSize: 24,
          color: "Black",
        }}>Sign in</Text>

        <View style={{
          position: "absolute",
          flex: 1,
          flexDirection: "row",
          top: "31%",
          width: "80%",
          alignItems: "center",
        }}>
          <View style={{
            position: "absolute",
            borderWidth: 1,
            borderColor: "#E4DFDF",
            borderRadius: 7,
            width: "100%",
            height: "130%",
          }} />
          <Text style={{
            paddingLeft: "4%",
            paddingRight: "4%",
          }}>
            <Icon name="user" size={20} color="#807A7A" />
          </Text>
          <TextInput
            style={{
              height: 40,
              width: "82%",
              borderColor: "#807A7A",
            }}
            placeholder={"Username"}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={{
          position: "absolute",
          flex: 1,
          flexDirection: "row",
          top: "38.5%",
          width: "80%",
          alignItems: "center",
        }}>
          <View style={{
            position: "absolute",
            borderWidth: 1,
            borderColor: "#E4DFDF",
            borderRadius: 7,
            width: "100%",
            height: "130%",
          }} />
          <Text style={{
            paddingLeft: "4%",
            paddingRight: "4%",
          }}>
            <Icon name="lock" size={20} color="#807A7A" />
          </Text>
          <TextInput
            style={{
              height: 40,
              width: "70%",
              borderColor: "#807A7A",
            }}
            placeholder={"Password"}
            onChangeText={onChangeText}
            value={text}
          />
          <Pressable style={{
            paddingLeft: "4%",
            paddingRight: "4%",
          }} onPress={() => {
            if (eyechange == "eye") {
              setEyechange("eye-off");
            }
            else if (eyechange == "eye-off") {
              setEyechange("eye");
            }
          }}>
            <Icon name={eyechange} size={20} color="#807A7A" />
          </Pressable>
        </View>

        {/* </View> */}
        {/*
        <Image style={styles.user_box} source={require("./images/username_box.png")} />
        <Image style={styles.pass_box} source={require("./images/password_box.png")} />
        <Image style={styles.sliding_button} source={require("./images/button_off.png")} />
        <Image style={styles.rmmbr_me} source={require("./images/remember_me.png")} />
        <Image style={styles.frgt_pswd} source={require("./images/forgot_password.png")} />
        <Image style={styles.sign_in_button} source={require("./images/button_sign_in.png")} />
        <Image style={styles.or} source={require("./images/or.png")} />
        <Image style={styles.login_with_google} source={require("./images/login_with_google.png")} />
        <Image style={styles.login_with_facebook} source={require("./images/login_with_facebook.png")} />
        <Image style={styles.not_signed_up} source={require("./images/not_signed_up.png")} /> */}
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
  brand_logo: {
    position: "absolute",
    width: "100%",
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
