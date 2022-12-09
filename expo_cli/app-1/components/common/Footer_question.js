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
  Dimensions,
  useColorScheme,
} from "react-native";

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const Footer_question = ({ navigation, value1, value2, fontfamily, color1, color2, op, top, left }) => {
  const colorScheme = useColorScheme();
  const default_text_color = colorScheme === 'light' ? "black" : "#FFFFFF";
  return (
    <View style={{
      position: "absolute",
      top: .92 * dheight,
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
          color: default_text_color,
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
            navigation.navigate("Sign_up");
          }
          else if (value2 == "Sign in") {
            navigation.navigate("Sign_in")
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
