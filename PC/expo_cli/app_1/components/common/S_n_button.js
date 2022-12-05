import React from "react";
import {
  Text,
  View,
  Pressable,
} from "react-native";

const S_n_button = ({ position, value, fontfamily, op, top, left, fontsize, fontcolor }) => {
  return (
    <View style={{
      position: position,
      width: "100%",
      top: top,
      left: left,

    }}>
      <Pressable delayPressIn={0} onPress={() => { }}>
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
