import React from "react";
import {
  Text,
  View,
  Pressable,
} from "react-native";

const S_n_button = ({ route_name, navigation, position, value, fontfamily, op, top, left, fontsize, fontcolor }) => {
  return (
    <View style={{
      position: position,
      width: "100%",
      top: top,
      left: left,
    }}>
      <Pressable delayPressIn={0} onPress={() => {
        if (value == "Skip") {
          navigation.replace("Sign_in");
        }
        if (route_name == "Onboarding_1" && value == "Next") {
          navigation.replace("Onboarding_2");
        }
        else if (route_name == "Onboarding_2" && value == "Next") {
          navigation.replace("Onboarding_3");
        }
        else if (route_name == "Onboarding_3" && value == "Next") {
          navigation.replace("Sign_in");
        }
        else if (route_name == "Sign_in" && value == "Forget Password?") {
          navigation.replace("Reset_password1");
        }
      }}>
        <Text style={{
          fontFamily: fontfamily,
          fontSize: fontsize,
          color: fontcolor,
          opacity: op,
        }}>{value}</Text>
      </Pressable>
    </View >
  );
};
export default S_n_button;
