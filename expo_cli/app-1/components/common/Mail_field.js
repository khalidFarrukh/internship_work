import React, { useState } from "react";
import * as NavigationBar from 'expo-navigation-bar';
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

const Mail_field = ({ fontfamily, top, }) => {
  const [isFocused, onIsFocused] = useState(false);
  const [isalert, onIsalert] = useState(false);
  const [text, onChangeText] = useState("");
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
        borderColor: isFocused == true ? "#5669FF" : isalert == true ? "red" : "#E4DFDF",
        borderRadius: 7,
        width: "100%",
        height: "130%",
      }} />
      <Text style={{
        paddingLeft: "4%",
        paddingRight: "4%",
      }}>
        <Icon name="mail" size={20} color={isFocused == true ? "#5669FF" : isalert == true ? "red" : "#807A7A"} />
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "82%",
          borderColor: "#807A7A",
          fontFamily: fontfamily,
        }}
        cursorColor={"#5669FF"}
        placeholder={"xyz@gmail.com"}
        placeholderTextColor={isalert == true ? "red" : "#747688"}
        onChangeText={onChangeText}
        onFocus={() => {
          onIsFocused(true);
          onIsalert(false);
        }}
        onEndEditing={() => {
          onIsFocused(false);
        }}
        value={text}
      />
    </View>

  );
};
export default Mail_field;
