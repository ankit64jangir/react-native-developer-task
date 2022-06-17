import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthenticationScreen from './src/Screens/AuthenticationScreen';

const NavigationStack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <NavigationStack.Navigator
          initialRouteName='Authentication'
          screenOptions={{
            headerShown: false,
          }}
        >
          <NavigationStack.Screen name='Authentication' component={AuthenticationScreen} />
        </NavigationStack.Navigator>
        <StatusBar style='light' />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;