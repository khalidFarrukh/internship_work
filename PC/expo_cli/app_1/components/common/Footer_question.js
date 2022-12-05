import React from "react";
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

const Footer_question = ({ value1, value2, fontfamily, color1, color2, op, top, left }) => {
  return (
    <View style={{
      position: "absolute",
      top: "92%",
      width: "70%",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
    }}>
      <View style={{
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={{
          fontSize: 14,
          fontFamily: fontfamily,
          color: "black",
        }}>
          {value1}
        </Text>
      </View>
      <Pressable style={{
        width: "25%",
        justifyContent: "center",
      }}
        onPress={() => {
          if (value2 == "Sign up") {
            alert("warning sign up");
          }
          else if (value2 == "Sign in") {
            alert("warning sign in");
          }
        }}
      >
        <Text style={{
          fontSize: 14,
          fontFamily: fontfamily,
          color: "#5669FF",
        }}>
          {value2}
        </Text>
      </Pressable>
    </View>
  );
};
export default Footer_question;
