import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import InputField from "../Components/InputField";
import CustomButton from "../Components/CustomButton";

const Login = (props) => {
  const { onLogin, onSignUp } = props;
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.heading5}>WELCOME BACK</Text>
        <Text style={styles.heading1}>Log into your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField
          label="Email or Username"
          placeholder="Enter your email"
          type="text"
        />
        <View style={{ marginTop: 16 }} />
        <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          rightText="Forgot password?"
        />
        <View style={{ marginTop: 20 }} />
        <CustomButton
          btnTitle="Login now"
          variant="primary"
          onLoginClick={onLogin}
        />
      </View>

      <TouchableOpacity style={styles.bottom} onPress={onSignUp}>
        <Text style={{ ...styles.heading5, color: "#7F8084" }}>
          Not registered yet?{" "}
        </Text>
        <Text style={{ ...styles.heading5, color: "#C5C7CA" }}>
          Register <AntDesign name="arrowright" />
        </Text>
      </TouchableOpacity>
    </View>
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
    borderColor: "#969696",
    width: "100%",
  },
  inputContainer: {
    marginTop: 34,
  },
  heading: {
    alignItems: "center",
  },
  heading5: {
    color: "#6B6C70",
    fontSize: 14,
  },
  heading1: {
    color: "#FFFFFF",
    marginTop: 8,
    fontSize: 18,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
});

export default Login;
