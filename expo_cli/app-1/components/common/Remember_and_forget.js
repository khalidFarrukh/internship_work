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
} from "react-native";
import { useRoute } from '@react-navigation/native';
import S_n_button from "./../common//S_n_button";

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Remember_and_forget = ({ navigation, text_color, fontfamily, top, }) => {
  const [remember_me, setRemember_me] = useState(false);
  const toggleSwitch = () => setRemember_me(previousState => !previousState);

  return (
    <View style={{
      position: "absolute",
      flex: 1,
      flexDirection: "row",
      top: top,
      width: .8 * dwidth,
      alignItems: "center",
    }}>
      <Switch
        trackColor={{ false: "#767577", true: "#5669FF" }}
        thumbColor={"white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={remember_me}
      />
      <Text style={{
        fontFamily: fontfamily,
        fontSize: 14,
        color: text_color,
        opacity: 1,
      }}>
        Remember me
      </Text>
      <S_n_button
        route_name={"Sign_in"}
        navigation={navigation}
        value={"Forget Password?"}
        fontcolor={text_color}
        fontfamily={fontfamily}
        left={"40%"}
        fontsize={14}
      />
    </View>
  );
};
export default Remember_and_forget;
