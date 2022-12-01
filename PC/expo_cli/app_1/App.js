import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from "react";
import Splash_screen from "./components/Splash_screen/Splash_screen";
// import Onboarding_1 from "./components/Onboarding_1/Onboarding_1";
// import Onboarding_2 from "./components/Onboarding_2/Onboarding_2";
// import Onboarding_3 from "./components/Onboarding_3/Onboarding_3";
// import Sign_in from "./components/Sign_in/Sign_in";
// import Sign_up from "./components/Sign_up/Sign_up";
// import Verification from "./components/Verification/Verification";
// import Reset_password from "./components/Reset_password/Reset_password";
// import Home from "./components/Home/Home";

// import { useTheme, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    if (splash == true) {
      setSplash(false);
      return (
        <Splash_screen />
      );
    }
    else if (splash == false) {
      alert("splash_false");
    }
  }, []);
  // return (
  //   null
  //   // <NavigationContainer >
  //   //   <StatusBar style="auto" />
  //   //   <Stack.Navigator initialRouteName="Onboarding_1" screenOptions={{ headerShown: false }}>
  //   //     <Stack.Screen name="Splash_screen" component={Splash_screen} />
  //   //     <Stack.Screen name="Onboarding_1" component={Onboarding_1} />
  //   //     {/* <Stack.Screen name="Onboarding_2" component={Onboarding_2} />
  //   //     <Stack.Screen name="Onboarding_3" component={Onboarding_3} />
  //   //     <Stack.Screen name="Sign_in" component={Sign_in} />
  //   //     <Stack.Screen name="Sign_up" component={Sign_up} />
  //   //     <Stack.Screen name="Home" component={Home} /> */}
  //   //   </Stack.Navigator>
  //   // </NavigationContainer>
  // );
};
