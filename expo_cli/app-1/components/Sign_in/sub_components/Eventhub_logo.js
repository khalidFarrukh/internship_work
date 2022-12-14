import React from "react";
import Svg, { Path } from 'react-native-svg';
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
} from "react-native";

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

export default function Eventhub_logo({ position, width, top, text_color, fontfamily }) {

  return (
    <>
      <View style={[{ aspectRatio: 1, }, { position: position, width: width, top: top, }]}>
        <Svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M46.7786 30.0237L46.8803 30.0723C49.2459 31.3352 50.1616 34.1767 48.9152 36.4596C44.591 44.3526 35.8917 49.7442 25.8951 49.6713C11.9558 49.5742 0.534706 38.7425 0.331212 25.4336C0.102282 11.6876 11.7014 0.491699 26.0731 0.491699C34.1874 0.491699 41.4369 4.08606 46.1426 9.69618L36.9346 14.4563C33.9839 11.7119 29.8886 10.0605 25.4118 10.2305C17.1957 10.5462 10.5822 17.0306 10.4804 24.8994C10.3787 33.2052 17.3992 39.9568 26.0477 39.9568C32.0507 39.9568 37.2652 36.7267 39.8598 31.9666C41.1825 29.5866 44.3112 28.7123 46.7786 30.0237Z" fill="#5669FF" />
          <Path d="M48.9916 13.8734C50.1362 16.0106 49.3223 18.6335 47.1093 19.7992L41.4623 22.7864L27.4722 30.1937C25.2846 31.3595 22.5375 30.7766 21.0621 28.8337L21.0113 28.7608C19.2561 26.4537 20.0192 23.175 22.6646 21.815L36.96 14.432L46.1681 9.67188C47.2365 10.9833 48.1776 12.3919 48.9916 13.8734Z" fill="#00F8FF" />
        </Svg>
      </View>
      <Text style={{
        position: "absolute",
        top: .18 * dheight,
        fontFamily: fontfamily,
        fontSize: 30,
        color: text_color,
      }}>EventHub</Text>
    </>
  );
}
