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
  useColorScheme,
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

  const colorScheme = useColorScheme();
  const input_background_color = colorScheme === 'light' ? null : "#393948";
  const input_border_color = colorScheme === 'light' ? "#E4DFDF" : "#3C3E56";
  const default_icon_color = colorScheme === 'light' ? "#807A7A" : "#AAAAAA";
  const default_text_color = colorScheme === 'light' ? "black" : "#FFFFFF";
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
      } color={"#F2583E"} fontfamily={fontfamily} left={-.05 * dwidth} />
      <View style={{
        position: "absolute",
        borderWidth: 1,
        backgroundColor: input_background_color,
        borderColor: isFocused == true ? "#5669FF" : isalert == true ? "#F2583E" : input_border_color,
        borderRadius: 7,
        width: "100%",
        height: "130%",
      }} />
      <Text style={{
        paddingLeft: "4%",
        paddingRight: "4%",
      }}>
        <Icon name="lock" size={20} color={isFocused == true ? "#5669FF" : isalert == true ? "#F2583E" : default_icon_color} />
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "70%",
          color: default_text_color,
          fontFamily: fontfamily,
        }}
        cursorColor={"#5669FF"}
        placeholder={placeholder}
        placeholderTextColor={isalert == true ? "#F2583E" : "#747688"}
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
        <Icon name={eyechange} size={20} color={"#807A7A"} />
      </Pressable>
    </View>
  );
};
export default Password_field;
