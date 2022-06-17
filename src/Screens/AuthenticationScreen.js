import { View, Text, StyleSheet } from "react-native";
import InputField from "../Components/InputField";
import CustomButton from "../Components/CustomButton";

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AuthenticationScreen</Text>
      <InputField label="Hello" />
      <CustomButton btnTitle="Login Now" variant="secondary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default AuthenticationScreen;
