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
  Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Invalid from "./Invalid";

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Password_field = ({ placeholder, fontfamily, top, }) => {
  const [isFocused, onIsFocused] = useState(false);
  const [isalert, onIsalert] = useState(false);
  const [text, onChangeText] = useState("");
  const [eyechange, setEyechange] = useState("eye")

  return (
    <View style={{
      position: "absolute",
      flex: 1,
      flexDirection: "row",
      top: top,
      width: .8 * dwidth,
      alignItems: "center",
    }}>
      <Invalid DON={
        {
          display: isalert == true ? "flex" : "none"
        }
      } fontfamily={fontfamily} left={-.05 * dwidth} />
      <View style={{
        position: "absolute",
        borderWidth: 1,
        borderColor: isFocused == true ? "#5669FF" : isalert == true ? "red" : "#E4DFDF",
        borderRadius: 7,
        width: "100%",
        height: "130%",
      }} />
      <Text style={{
        paddingLeft: "4%",
        paddingRight: "4%",
      }}>
        <Icon name="lock" size={20} color={isFocused == true ? "#5669FF" : isalert == true ? "red" : "#807A7A"} />
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "70%",
          fontFamily: fontfamily,
        }}
        cursorColor={"#5669FF"}
        placeholder={placeholder}
        placeholderTextColor={isalert == true ? "red" : "#747688"}
        onChangeText={onChangeText}
        secureTextEntry={eyechange == "eye"}
        onFocus={() => {
          onIsFocused(true);
          onIsalert(false);
        }}
        onEndEditing={() => {
          onIsFocused(false);
          if (text.length == 0) {
            onIsalert(true);
          }
        }}
        value={text}
      />
      <Pressable style={{
        paddingLeft: "4%",
        paddingRight: "4%",
      }}
        disabled={text.length == 0 ? true : false}
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
export default Password_field;
