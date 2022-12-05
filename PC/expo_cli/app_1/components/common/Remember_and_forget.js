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
import S_n_button from "./../common//S_n_button";

const Remember_and_forget = ({ fontfamily, top, }) => {
  const [remember_me, setRemember_me] = useState(false);
  const toggleSwitch = () => setRemember_me(previousState => !previousState);
  return (
    <View style={{
      position: "absolute",
      flex: 1,
      flexDirection: "row",
      top: top,
      width: "80%",
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
        color: "black",
        opacity: 1,
      }}>
        Remember me
      </Text>
      <S_n_button
        value={"Forget Password?"}
        fontcolor={"black"}
        fontfamily={fontfamily}
        left={"40%"}
        fontsize={14}
      />
    </View>
  );
};
export default Remember_and_forget;
