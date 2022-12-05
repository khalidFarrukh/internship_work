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

const Left_heading = ({ value, fontfamily, top, }) => {
  return (
    <Text style={{
      position: "absolute",
      top: top,
      left: "8%",
      fontFamily: fontfamily,
      fontSize: 24,
      color: "Black",
    }}>{value}</Text>
  );
};
export default Left_heading;
