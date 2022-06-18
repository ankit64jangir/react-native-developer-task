import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.userName}>Hello Jane</Text>
          <Text style={styles.subText}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </Text>
        </View>
        <View style={styles.createPostContainer}>
          <CreatePost />
        </View>
        <View style={styles.postContainer}>
          <Post
            name="Theresa Webb"
            profilePic="https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            postTime="5 mins ago"
            emoji="👋"
            postMessage="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            comments={24}
            isEdited={false}
          />

          <Post
            name="Marvin McKinney"
            profilePic="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            postTime="8 mins ago"
            emoji="😔"
            postMessage="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            comments={24}
            isEdited={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userName: {
    marginTop: 70,
    paddingHorizontal: 16,
    color: "#C5C7CA",
    fontSize: 28,
    fontWeight: "500",
  },
  subText: {
    color: "#7F8084",
    paddingHorizontal: 16,
    paddingRight: 70,
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 23,
    marginTop: 12,
  },
  createPostContainer: {
    marginTop: 32,
  },
  postContainer: {
    marginBottom: 50,
  },
});

export default HomeScreen;
