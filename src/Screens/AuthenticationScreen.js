import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import InputField from "../Components/InputField";
import CustomButton from "../Components/CustomButton";

const AuthenticationScreen = () => {
  const navigation = useNavigation();
  const onLoginClick = () => {
    navigation.navigate("Home");
  };
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
              onLoginClick={onLoginClick}
            />
          </View>

          <Pressable style={styles.bottom}>
            <Text style={{ ...styles.heading5, color: "#7F8084" }}>
              Not registered yet?{" "}
            </Text>
            <Text style={{ ...styles.heading5, color: "#C5C7CA" }}>
              Register <AntDesign name="arrowright" />
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
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

export default AuthenticationScreen;
