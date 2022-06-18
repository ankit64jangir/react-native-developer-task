import { View, Text, StyleSheet, TextInput } from "react-native";
import CustomButton from "./CustomButton";
import { FontAwesome } from "@expo/vector-icons";

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.createPostText}>Create post</Text>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesome name="commenting" size={20} color="white" />
            </View>
          </View>
          <TextInput
            placeholder="How are you feeling today?"
            placeholderTextColor="#7F8084"
            style={styles.postInputField}
          />
        </View>

        <View style={styles.postBtn}>
          <CustomButton btnTitle="Post" varient="secondary" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  box: {
    height: 198,
    backgroundColor: "#27292D",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#35373B",
    width: "100%",
    paddingHorizontal: 12,
  },
  createPostText: {
    color: "#C5C7CA",
    fontWeight: "500",
    fontSize: 18,
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: "#191920",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    borderRadius: 8,
  },
  iconContainer: {
    marginRight: 16,
    marginLeft: 14,
  },
  icon: {
    backgroundColor: "#27292D",
    width: 34,
    height: 34,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  postInputField: {
    color: "white",
    paddingVertical: 18,
  },
  postBtn: {
    width: 87,
    marginTop: 14,
    alignSelf: "flex-end",
  },
});

export default CreatePost;
