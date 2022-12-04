import React from "react";
import {
  Text,
  View,
  Pressable,
} from "react-native";

const S_n_button = ({ value, fF, op, top, left }) => {
  return (
    <View style={{
      position: "absolute",
      width: "100%",
      top: top,
    }}>
      <Pressable delayPressIn={0} onPress={() => { }}>
        <Text style={{
          position: "absolute",
          fontFamily: fF,
          fontSize: 18,
          left: left,
          color: "white",
          opacity: op,
        }}>{value}</Text>
      </Pressable>
    </View >
  );
};
export default S_n_button;
