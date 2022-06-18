import { View, Text, StyleSheet } from "react-native";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: "white", marginTop: 90}}>HomeScreen</Text>
      <CreatePost />
      <Post 
       name='Theresa Webb'
       profilePic='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
       postTime='5 mins ago'
       emoji='👋'
       postMessage='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
       comments={24}
       isEdited={false}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
