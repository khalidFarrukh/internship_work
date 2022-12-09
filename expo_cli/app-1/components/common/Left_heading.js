import React, { useState } from "react";
import {
  Text,
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const Left_heading = ({ value, text_color, fontfamily, top, left }) => {
  return (
    <Text style={{
      position: "absolute",
      top: top,
      left: left,
      fontFamily: fontfamily,
      fontSize: 24,
      color: text_color,
    }}>{value}</Text>
  );
};
export default Left_heading;
