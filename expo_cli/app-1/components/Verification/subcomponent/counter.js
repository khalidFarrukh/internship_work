import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Switch,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";

const Counter = (props) => {
  const [time, setTime] = React.useState(60);
  const timerRef = React.useRef(time);
  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        timerRef.current = 59;
        setTime(timerRef.current);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <View style={{
        position: "absolute",
        top: props.top,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Text style={{
          fontFamily: props.fontfamily,
          fontSize: 14,
          color: props.text_color,
          opacity: 1,
        }}>
          {"Re-send code in "}
        </Text>
        <Text style={{
          fontFamily: props.fontfamily,
          fontSize: 14,
          color: "#5669FF",
          opacity: 1,
        }}>{time}</Text>
      </View>
    </>
  );
};
export default Counter;
