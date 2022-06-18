import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import SignUp from "../Components/Signup";

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Image
            source={require("../../assets/Logo.png")}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View style={styles.backgroundBox}>
          <SignUp
            onLogin={() => {
              navigation.navigate("LoginScreen");
            }}
            onSignUp={() => navigation.navigate("HomeScreen")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backgroundBox: {
    backgroundColor: "#27292D",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 30,
    margin: 10,
    borderColor: "#969696",
    width: "100%",
  },
});

export default SignUpScreen;
