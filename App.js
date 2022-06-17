import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthenticationScreen from "./src/Screens/AuthenticationScreen";
import HomeScreen from "./src/Screens/HomeScreen";

const NavigationStack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "black",
  },
};
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
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
    </GestureHandlerRootView>
  );
};

export default App;
