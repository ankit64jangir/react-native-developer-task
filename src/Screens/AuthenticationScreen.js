import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AuthenticationScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});

export default AuthenticationScreen;
