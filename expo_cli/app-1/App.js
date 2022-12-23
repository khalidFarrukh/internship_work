import 'react-native-gesture-handler';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

// import React, { useState, useEffect, useCallback } from "react";
// import Splash_screen from "./components/Splash_screen/Splash_screen";
// import Onboarding_1 from "./components/Onboarding_1/Onboarding_1";
// import Onboarding_2 from "./components/Onboarding_2/Onboarding_2";
// import Onboarding_3 from "./components/Onboarding_3/Onboarding_3";
// import Sign_in from "./components/Sign_in/Sign_in";
// import Sign_up from "./components/Sign_up/Sign_up";
// import Verification from "./components/Verification/Verification";
// import Reset_password1 from "./components/Reset_password/Reset_password1";
// import Reset_password2 from "./components/Reset_password/Reset_password2";
import Home from "./components/Home/Home";


import { useTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  let [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const Poppins_Thin = "Poppins_100Thin";
  const Poppins_ExtraLight = "Poppins_200ExtraLight";
  const Poppins_Light = "Poppins_300Light";
  const Poppins_Regular = "Poppins_400Regular";
  const Poppins_Medium = "Poppins_500Medium";
  const Poppins_SemiBold = "Poppins_600SemiBold";
  const Poppins_Bold = "Poppins_700Bold";

  let fonts = [Poppins_Thin,
    Poppins_ExtraLight,
    Poppins_Light,
    Poppins_Regular,
    Poppins_Medium,
    Poppins_SemiBold,
    Poppins_Bold];

  return (<Home fonts={fonts} />);
  // return (
  //   <NavigationContainer >
  //     <Stack.Navigator initialRouteName="Splash_screen" screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="Splash_screen" component={Splash_screen} />
  //       <Stack.Screen name="Onboarding_1" component={Onboarding_1} />
  //       <Stack.Screen name="Onboarding_2" component={Onboarding_2} />
  //       <Stack.Screen name="Onboarding_3" component={Onboarding_3} />
  //       <Stack.Screen name="Sign_up" component={Sign_up} />
  //       <Stack.Screen name="Sign_in" component={Sign_in} />
  //       <Stack.Screen name="Reset_password1" component={Reset_password1} />
  //       <Stack.Screen name="Reset_password2" component={Reset_password2} />
  //       <Stack.Screen name="Verification" component={Verification} />
  //       {/* <Stack.Screen name="Home" component={Home} /> */}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};
