import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import React, { useState } from "react";
import {
  SafeAreaView,
  Animated,
  Keyboard,
  Image,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  AppRegistry,
  View,
  Button,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
  },
  profile_pic: {
    position: "absolute",
    top: "-40%",
    left: "7%",
    width: "20%",
    height: "100%",
    resizeMode: "contain",
  },
  profile_name: {
    position: "absolute",
    top: "-32%",
    left: "7.5%",
    width: "35%",
    height: "100%",
    resizeMode: "contain",
  },
  side_buttons: {
    position: "absolute",
    width: "30%",
    height: "100%",
    resizeMode: "contain",
  },
  button_my_profile: {
    top: "-23%",
    left: "9%",
  },
  button_messages: {
    top: "-16%",
    left: "9%",
  },
  button_calender: {
    top: "-9%",
    left: "9%",
  },
  button_bookmark: {
    top: "-2%",
    left: "9%",
  },
  button_contact_us: {
    top: "5%",
    left: "9%",
  },
  button_settings: {
    top: "12%",
    left: "9%",
  },
  button_help_faqs: {
    top: "19%",
    left: "9%",
  },
  butto_sign_out: {
    top: "26%",
    left: "9%",
  },
  home_search_background: {
    position: "absolute",
    backgroundColor: "#5669FF",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    top: "0%",
    width: "100%",
    height: "30%",
    resizeMode: "contain",
  },
  button_menu: {
    position: "absolute",
    top: "-40%",
    left: "7%",
    width: "6%",
    height: "100%",
    resizeMode: "contain",
  },
  button_current_location: {
    position: "absolute",
    top: "-40%",
    alignSelf: "center",
    width: "30%",
    height: "100%",
    resizeMode: "contain",
  },
  button_notifications: {
    position: "absolute",
    top: "-40%",
    right: "7%",
    width: "8%",
    height: "100%",
    resizeMode: "contain",
  },
  pressable_button_search: {
    position: "absolute",
    backgroundColor: "#5669FF",
    top: "15%",
    width: "70%",
    height: "5%",
    resizeMode: "contain",
  },
  search_icon: {
    position: "absolute",
    left: "9%",
    width: "10%",
    height: "100%",
    resizeMode: "contain",
  },
  line: {
    position: "absolute",
    backgroundColor: "#A29EF0",
    top: "20%",
    left: "23%",
    width: "1%",
    borderRadius: 40,
    height: "60%",
    resizeMode: "contain",
  },
  view_search_placeholder: {
    position: "absolute",
    top: "15%",
    left: "27%",
    // width: "100%",
  },
  text_search_placeholder: {
    fontSize: 20,
    color: "#A29EF0",
  },
  button_filters: {
    position: "absolute",
    // top: "9.5%",
    right: "7%",
    width: "20%",
    resizeMode: "contain",
  },
  heading_upcoming_events: {
    position: "absolute",
    width: "40%",
    top: "30%",
    left: "7%",
    resizeMode: "contain",
  },
  button_see_all: {
    position: "absolute",
    width: "15%",
    resizeMode: "contain",
  },
  invite_your_freinds: {
    position: "absolute",
    width: "100%",
    top: "37%",
    left: "6.5%",
    resizeMode: "contain",
  },
  button_invite: {
    position: "absolute",
    width: "15%",
    top: "70%",
    left: "12%",
    resizeMode: "contain",
  },
  heading_nearby_you: {
    position: "absolute",
    width: "25%",
    top: "78%",
    left: "7%",
    resizeMode: "contain",
  },
  lower_background: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
  },
  button_explore: {
    position: "absolute",
    left: "9%",
    width: "10%",
    resizeMode: "contain",
  },
  button_events: {
    position: "absolute",
    left: "33%",
    width: "10%",
    resizeMode: "contain",
  },
  button_weather: {
    position: "absolute",
    alignSelf: "center",
    width: "13%",
    resizeMode: "contain",
  },
  button_map: {
    position: "absolute",
    right: "33%",
    width: "7%",
    resizeMode: "contain",
  },
  button_profile: {
    position: "absolute",
    right: "9%",
    width: "10%",
    resizeMode: "contain",
  },



});

const Home = () => {

  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setBackgroundColorAsync('#ffffff00')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* 
        <Image style={styles.profile_pic} source={require("./images/profile_pic.png")} />
        <Image style={styles.profile_name} source={require("./images/profile_name.png")} />
        <Image style={[styles.side_buttons, styles.button_my_profile]} source={require("./images/button_my_profile.png")} />
        <Image style={[styles.side_buttons, styles.button_messages]} source={require("./images/button_message.png")} />
        <Image style={[styles.side_buttons, styles.button_calender]} source={require("./images/button_calender.png")} />
        <Image style={[styles.side_buttons, styles.button_bookmark]} source={require("./images/button_bookmark.png")} />
        <Image style={[styles.side_buttons, styles.button_contact_us]} source={require("./images/button_contact_us.png")} />
        <Image style={[styles.side_buttons, styles.button_settings]} source={require("./images/button_settings.png")} />
        <Image style={[styles.side_buttons, styles.button_help_faqs]} source={require("./images/button_help_faqs.png")} />
        <Image style={[styles.side_buttons, styles.butto_sign_out]} source={require("./images/button_sign_out.png")} /> */}
        <View style={styles.home_search_background} />
        <Image style={styles.button_menu} source={require("./images/button_menu.png")} />
        <Image style={styles.button_current_location} source={require("./images/button_current_location.png")} />
        <Image style={styles.button_notifications} source={require("./images/button_notifications.png")} />
        {/* <View style={styles.button_search} /> */}
        <Pressable style={styles.pressable_button_search}>
          <Image style={styles.search_icon} source={require("./images/search_icon.png")} />
          <View style={styles.line} />
          <View style={styles.view_search_placeholder} >
            <Text style={styles.text_search_placeholder}>
              Search...
            </Text>
          </View>
        </Pressable>
        <Pressable style={{
          position: "absolute",
          top: "9.5%",
          width: "100%",
          resizeMode: "contain",
        }}>
          <Image style={styles.button_filters} source={require("./images/button_filters.png")} />
        </Pressable>
        <Image style={styles.heading_upcoming_events} source={require("./images/heading_upcoming_events.png")} />
        <Image style={[styles.button_see_all, {
          top: "32.8%",
          right: "7%",
        }]} source={require("./images/button_see_all.png")} />
        <Image style={styles.invite_your_freinds} source={require("./images/invite_your_freinds.png")} />
        <Image style={styles.button_invite} source={require("./images/button_invite.png")} />

        <Image style={styles.heading_nearby_you} source={require("./images/heading_nearby_you.png")} />
        <Image style={[styles.button_see_all, {
          top: "80%",
          right: "7%",
        }]} source={require("./images/button_see_all.png")} />

        {/* <View style={[styles.lower_background]} /> */}
        <Pressable style={{
          position: "absolute",
          top: "83.5%",
          width: "100%",
          resizeMode: "contain",
        }}>
          <Image style={[styles.button_explore]} source={require("./images/button_explore.png")} />
        </Pressable>
        <Pressable style={{
          position: "absolute",
          top: "83.5%",
          width: "100%",
          resizeMode: "contain",
        }}>
          <Image style={[styles.button_events]} source={require("./images/button_events.png")} />
        </Pressable>
        <Pressable style={{
          position: "absolute",
          top: "77%",
          width: "100%",
          resizeMode: "contain",
        }}>
          <Image style={[styles.button_weather]} source={require("./images/button_weather.png")} />
        </Pressable>
        <Pressable style={{
          position: "absolute",
          top: "83.5%",
          width: "100%",
          resizeMode: "contain",
        }} onPress={() => {
          alert("warning!");
        }}>
          <Image style={[styles.button_map]} source={require("./images/button_map.png")} />
        </Pressable>
        <Pressable style={{
          position: "absolute",
          top: "83.5%",
          width: "100%",
          resizeMode: "contain",
        }}>
          <Image style={[styles.button_profile]} source={require("./images/button_profile.png")} />
        </Pressable>

      </View>
    </SafeAreaView >
  );
};

export default Home;
