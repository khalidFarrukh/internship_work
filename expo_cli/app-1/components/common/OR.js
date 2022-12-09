import React from "react";
import {
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import Svg, { Rect, Path } from 'react-native-svg';

const dwidth = Dimensions.get("screen").width;
const dheight = Dimensions.get("screen").height;

const OR = ({ value, fontfamily, navigation }) => {
  return (
    <View style={{
      position: "absolute",
      top: .64 * dheight,
      width: .76 * dwidth,
      height: .25 * dheight,
    }}>
      <View style={{
        position: "absolute",
        width: "100%",
        height: "20%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }} >
        <Text style={{
          color: "#9D9898",
          fontSize: 16,
          fontFamily: fontfamily,
        }}>
          OR
        </Text>
      </View>
      <Pressable style={{
        position: "absolute",
        top: "26%",
        backgroundColor: "white",
        borderRadius: 10,
        width: "100%",
        height: "25%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        shadowColor: '#5669FF',
      }}
      >
        <View style={{
          width: "20%",
          height: "100%",
          alignItems: "center",

        }}>
          <View style={[{ aspectRatio: 1, position: "absolute", width: "60%", height: "100%", }]}>
            <Svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M14.0005 6.02721C15.8632 5.99855 17.6646 6.69251 19.0267 7.96346L22.6955 4.37596C20.3417 2.17039 17.2259 0.960973 14.0005 1.00096C11.5905 1.0004 9.22797 1.67026 7.17696 2.93561C5.12596 4.20096 3.46738 6.01192 2.38672 8.16596L6.59047 11.4297C7.10448 9.86678 8.09614 8.50463 9.42559 7.53535C10.755 6.56607 12.3552 6.03856 14.0005 6.02721V6.02721Z" fill="#E43E2B" />
              <Path d="M26.4801 14.2901C26.4954 13.3964 26.4031 12.5042 26.2051 11.6326H14.0001V16.4576H21.1651C21.0292 17.3035 20.7236 18.1132 20.2667 18.838C19.8098 19.5628 19.211 20.1877 18.5064 20.6751L22.6089 23.8526C23.8874 22.6182 24.8929 21.1293 25.5604 19.4822C26.2278 17.8351 26.5424 16.0663 26.4839 14.2901H26.4801Z" fill="#3B7DED" />
              <Path d="M6.60543 16.5715C6.3212 15.7439 6.17467 14.8753 6.17168 14.0003C6.17686 13.1267 6.31814 12.2592 6.59043 11.429L2.38668 8.16528C1.47492 9.97545 1 11.9741 1 14.0009C1 16.0277 1.47492 18.0264 2.38668 19.8365L6.60543 16.5715Z" fill="#F0B501" />
              <Path d="M14.0004 27.0008C17.167 27.0903 20.2476 25.9635 22.6092 23.852L18.5067 20.6745C17.1765 21.5663 15.6012 22.0207 14.0004 21.9745C12.3566 21.9647 10.7576 21.4376 9.43019 20.4679C8.10281 19.4982 7.11449 18.1351 6.60542 16.572L2.40167 19.837C3.47942 21.9901 5.13528 23.8006 7.18382 25.0659C9.23235 26.3311 11.5927 27.0011 14.0004 27.0008Z" fill="#2BA24C" />
            </Svg>
          </View>
        </View>
        <View style={{
          width: "50%",
          height: "50%",
          justifyContent: "center",
        }}>
          <Text style={{
            position: "absolute",
            fontSize: 16,
            fontFamily: fontfamily,
            color: "black",
          }}>
            Login with Google
          </Text>
        </View>

      </Pressable>
      <Pressable style={{
        position: "absolute",
        top: "61%",
        backgroundColor: "white",
        borderRadius: 10,
        width: "100%",
        height: "25%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        shadowColor: '#5669FF',
      }}
      >
        <View style={{
          width: "20%",
          height: "100%",
          alignItems: "center",
        }}>
          <View style={[{ aspectRatio: 1, position: "absolute", width: "60%", height: "100%", }]}>
            <Svg width="100%" height="100%" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Rect x="1" y="1" width="30.7551" height="30.7551" rx="15.3776" fill="#1977F3" />
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M19.0966 31.515C18.2141 31.6725 17.3055 31.7547 16.3777 31.7547C15.5553 31.7547 14.7481 31.6901 13.9607 31.5658V21.2757H9.78754V16.5405H13.9607V12.9314C13.9607 8.82681 16.4129 6.55884 20.1683 6.55884C21.4007 6.576 22.6303 6.68299 23.847 6.87893V10.9105H21.7735C19.7321 10.9105 19.0966 12.1731 19.0966 13.4699V16.5412H23.6546L22.926 21.2757H19.0966V31.515Z" fill="white" />
            </Svg>
          </View>
        </View>
        <View style={{
          width: "60%",
          height: "50%",
          justifyContent: "center",
        }}>
          <Text style={{
            fontSize: 16,
            fontFamily: fontfamily,
            color: "black",
          }}>
            Login with Facebook
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default OR;
