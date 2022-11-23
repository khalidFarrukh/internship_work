import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  splash_image: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "50%",
    height: 138,
    resizeMode: "contain",
  },
});

let check = 0;
const Adata = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
          <Image
            style={styles.splash_image}
            source={require("./assets/ventHub.png")}
          />
      </View>
    </SafeAreaView>
  );
};

export default Adata;
