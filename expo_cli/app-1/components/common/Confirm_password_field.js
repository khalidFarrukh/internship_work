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
  Pressable,
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const Confirm_password_field = ({ fontfamily, top, }) => {
  const [isFocused, onIsFocused] = useState(false);
  const [text, onChangeText] = useState("");
  const [eyechange, setEyechange] = useState("eye")
  return (
    <View style={{
      position: "absolute",
      flex: 1,
      flexDirection: "row",
      top: top,
      width: "80%",
      alignItems: "center",
    }}>
      <View style={{
        position: "absolute",
        borderWidth: 1,
        borderColor: isFocused == true ? "#5669FF" : "#E4DFDF",
        borderRadius: 7,
        width: "100%",
        height: "130%",
      }} />
      <Text style={{
        paddingLeft: "4%",
        paddingRight: "4%",
      }}>
        <Icon name="lock" size={20} color={isFocused == true ? "#5669FF" : "#807A7A"} />
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "70%",
          fontFamily: fontfamily,
        }}
        cursorColor={"#5669FF"}
        placeholder={"Confirm password"}
        placeholderTextColor="#747688"
        onChangeText={onChangeText}
        secureTextEntry={eyechange == "eye"}
        onFocus={() => {
          onIsFocused(true);
        }}
        onEndEditing={() => {
          onIsFocused(false);
        }}
        value={text}
      />
      <Pressable style={{
        paddingLeft: "4%",
        paddingRight: "4%",
      }}
        onPress={() => {
          if (eyechange == "eye") {
            setEyechange("eye-off");
          }
          else if (eyechange == "eye-off") {
            setEyechange("eye");
          }
        }}
      >
        <Icon name={eyechange} size={20} color="#807A7A" />
      </Pressable>
    </View>
  );
};
export default Confirm_password_field;
