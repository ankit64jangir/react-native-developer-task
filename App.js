import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthenticationScreen from "./src/Screens/AuthenticationScreen";
import HomeScreen from "./src/Screens/HomeScreen";

const NavigationStack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ backgroundColor: "black" }}>
        <NavigationContainer theme={DarkTheme}>
          <NavigationStack.Navigator
            initialRouteName="Authentication"
            screenOptions={{
              headerShown: false,
            }}
          >
            <NavigationStack.Screen
              name="Authentication"
              component={AuthenticationScreen}
            />
            <NavigationStack.Screen name="Home" component={HomeScreen} />
          </NavigationStack.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
