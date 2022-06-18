import { View, Text, StyleSheet, TextInput } from "react-native";
import React from 'react';
import { AntDesign } from "@expo/vector-icons";

const InputField = (props) => {
  const { label, rightText, placeholder, type } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputLabel}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.rightText}>{rightText}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#7F8084"
        />
        {type === "password" && (
          <View>
            <AntDesign name="eyeo" size={20} color="#7F8084" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#35373B",
    borderWidth: 1.5,
    borderRadius: 4,
    padding: 12,
  },
  input: {
    fontSize: 16,
    color: "#ffffff",
  },
  label: {
    color: "#C5C7CA",
    fontSize: 14,
  },
  rightText: {
    color: "#C5C7CA",
    fontSize: 12,
  },
});

export default InputField;
