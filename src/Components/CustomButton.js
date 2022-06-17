import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const { btnTitle, variant, onLoginClick } = props;
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onLoginClick}>
        <Text
          style={
            variant === "primary"
              ? styles.primaryButton
              : styles.secondaryButton
          }
        >
          {btnTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A96FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  primaryButton: {
    color: "#ffffff",
    fontSize: 16,
    paddingVertical: 14,
  },
  secondaryButton: {
    color: "#ffffff",
    fontSize: 14,
    paddingVertical: 12,
  },
});

export default CustomButton;
