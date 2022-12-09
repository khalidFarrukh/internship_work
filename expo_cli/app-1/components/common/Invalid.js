import React, { useState } from "react";
import {
  Text,
} from "react-native";
const Invalid = ({ DON, fontfamily, top, left }) => {
  return (
    <Text style={[{
      position: "absolute",
      top: top,
      left: left,
      fontFamily: fontfamily,
      fontSize: 24,
      color: "red",
    }, DON]}>
      !
    </Text>
  );
};
export default Invalid;
