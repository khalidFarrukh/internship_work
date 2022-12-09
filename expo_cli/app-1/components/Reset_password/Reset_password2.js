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
import { useRoute } from '@react-navigation/native';
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
  Dimensions,
  ScrollView,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Background_theme from "../common/Background_theme/Background_theme";
import Back_arrow_button from "../common/Back_arrow_button";
import Left_heading from "../common/Left_heading";
import Password_field from "../common/Password_field";
import Confirm_password_field from "../common/Confirm_password_field";
import Theme_button from "../common/Theme_button";

const Poppins_Thin = "Poppins_100Thin";
const Poppins_ExtraLight = "Poppins_200ExtraLight";
const Poppins_Light = "Poppins_300Light";
const Poppins_Regular = "Poppins_400Regular";
const Poppins_Medium = "Poppins_500Medium";
const Poppins_SemiBold = "Poppins_600SemiBold";
const Poppins_Bold = "Poppins_700Bold";

const CELL_COUNT = 4;
const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Reset_password2 = ({ navigation }) => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  const route = useRoute().name;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
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
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 642 }}>
          </Text>
          <Background_theme route_name={route} />
          <Back_arrow_button route_name={route} navigation={navigation} />
          <Left_heading value={"Reset Password"} fontfamily={Poppins_Medium} top={"12%"} />
          <View style={{
            position: "absolute",
            flex: 1,
            width: "100%",
            height: "100%",
            left: "8%",
          }}>
            <Text style={{
              position: "absolute",
              top: "16.5%",
              paddingRight: "25%",
              fontFamily: Poppins_Light,
              fontSize: 14,
              color: "black",
              opacity: 0.8,
            }}>Please enter your new password</Text>
          </View>
          <Password_field fontfamily={Poppins_Medium} top={"22%"} />
          <Confirm_password_field fontfamily={Poppins_Medium} top={"30%"} />
          <Theme_button value={"RESET"} route_name={route} navigation={navigation} fontfamily={Poppins_Medium} top={"38%"} />

        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  root: { flex: 1, padding: 20 },
  codeFieldRoot: {
    position: "absolute",
    top: "25%",
    width: "80%",
  },
  cell: {
    width: .16 * dwidth,
    height: .07 * dheight,
    lineHeight: 64,
    fontSize: 24,
    fontFamily: Poppins_Medium,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#00000030',
    textAlign: 'center',
    top: 10,
  },
  focusCell: {
    borderColor: '#000',
  },
});
export default Reset_password2;