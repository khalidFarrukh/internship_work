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

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const User_field = ({ fontfamily, top, }) => {
  const [isFocused, onIsFocused] = useState(false);
  const [text, onChangeText] = useState("");
  return (
    <View style={{
      position: "absolute",
      flex: 1,
      flexDirection: "row",
      top: top,
      width: .8 * dwidth,
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
        <Icon name="user" size={20} color={isFocused == true ? "#5669FF" : "#807A7A"} />
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "82%",
          fontFamily: fontfamily,
        }}
        cursorColor={"#5669FF"}
        placeholder={"Username"}
        placeholderTextColor="#747688"
        onChangeText={onChangeText}
        onFocus={() => {
          onIsFocused(true);
        }}
        onEndEditing={() => {
          onIsFocused(false);
        }}
        value={text}
      />
    </View>
  );
};
export default User_field;
