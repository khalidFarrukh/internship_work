import React from "react";
import {
  Text,
  View,
  Pressable,
} from "react-native";
import Svg, { Circle, Path } from 'react-native-svg';

const Theme_button = ({ value, fontfamily }) => {
  return (
    <Pressable style={{
      position: "absolute",
      top: "55%",
      backgroundColor: "#5669FF",
      borderRadius: 10,
      width: "65%",
      height: "6.5%",
      flex: 1,
      justifyContent: "center",
      elevation: 20,
      shadowColor: '#5669FF',

    }}>
      <View style={[{ aspectRatio: 1, right: 15, }, { position: "absolute", width: "15%" }]}>
        <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="16" cy="16" r="15" fill="#3D56F0" />
          <Path d="M9 15.5C9 15.0513 9.36377 14.6875 9.8125 14.6875H18.8718L14.9109 10.7267C14.5872 10.4029 14.5919 9.87665 14.9213 9.55868V9.55868C15.2425 9.24855 15.7531 9.25305 16.0688 9.5688L21.9356 15.4356C21.9712 15.4712 21.9712 15.5288 21.9356 15.5644L16.07 21.43C15.7552 21.7448 15.2448 21.7448 14.93 21.43V21.43C14.6162 21.1162 14.6151 20.6078 14.9275 20.2926L18.8718 16.3125H9.8125C9.36377 16.3125 9 15.9487 9 15.5V15.5Z" fill="white" />
        </Svg>
      </View>
      <View style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={{
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          fontFamily: fontfamily,
          color: "white",
        }}>
          {value}
        </Text>
      </View>
    </Pressable>
  );
};
export default Theme_button;
