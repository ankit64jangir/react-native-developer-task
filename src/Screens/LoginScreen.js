import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "../Components/Login";

const LoginScreen = () => {
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
          <Login
            onLogin={() => {
              navigation.navigate("HomeScreen");
            }}
            onSignUp={() => navigation.navigate("SignUpScreen")}
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

export default LoginScreen;
