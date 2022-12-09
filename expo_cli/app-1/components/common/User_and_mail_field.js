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

const User_and_mail_field = ({ placeholder, icon, fontfamily, top, }) => {
  const [isFocused, onIsFocused] = useState(false);
  const [isalert, onIsalert] = useState(false);
  const [text, onChangeText] = useState("");
  return (
    <View style={{
      position: "absolute",
      flex: 1,
      top: top,
      flexDirection: "row",
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
        <Icon name={icon} size={20} color={isFocused == true ? "#5669FF" : isalert == true ? "red" : "#807A7A"} />
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "82%",
          fontFamily: fontfamily,
        }}
        cursorColor={"#5669FF"}
        placeholder={placeholder}
        placeholderTextColor={isalert == true ? "red" : "#747688"}
        onChangeText={onChangeText}
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
    </View>
    // </View >
  );
};
export default User_and_mail_field;
