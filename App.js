import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";

const NavigationStack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ backgroundColor: "black" }}>
        <NavigationContainer theme={DarkTheme}>
          <NavigationStack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <NavigationStack.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
            <NavigationStack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
            />
            <NavigationStack.Screen name="HomeScreen" component={HomeScreen} />
          </NavigationStack.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
