import React, { useState } from "react";
import {
  Text,
} from "react-native";
const Invalid = ({ DON, color, fontfamily, top, left }) => {
  return (
    <Text style={[{
      position: "absolute",
      top: top,
      left: left,
      fontFamily: fontfamily,
      fontSize: 24,
      color: color,
    }, DON]}>
      !
    </Text>
  );
};
export default Invalid;
