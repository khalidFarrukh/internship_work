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

const User_field = ({ fontfamily, top, }) => {
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
          fontFamily: fontfamily,
        }}
        placeholder={"Username"}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};
export default User_field;
