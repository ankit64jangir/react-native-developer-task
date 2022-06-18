import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";
import Login from "../Components/Login";
import SignUp from "../Components/Signup";

const HomeScreen = () => {
  const [LoginModalState, setLoginModalState] = useState(false);
  const [showLogin, setshowLogin] = useState(false);

  const showModal = () => {
    setLoginModalState(true);
    setshowLogin(true);
  };

  const closeModal = () => {
    setLoginModalState(true);
    setshowLogin(false);
  };

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
        <TouchableOpacity
          style={styles.createPostContainer}
          onPress={showModal}
        >
          <CreatePost />
        </TouchableOpacity>
        <View style={styles.postContainer}>
          <TouchableOpacity onPress={showModal}>
            <Post
              name="Theresa Webb"
              profilePic="https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              postTime="5 mins ago"
              emoji="👋"
              postMessage="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              comments={24}
              isEdited={false}
            />
          </TouchableOpacity>

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

        <Modal
          backdropOpacity={0.6}
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          isVisible={showLogin}
          style={styles.bottomModal}
          onBackButtonPress={closeModal}
        >
          <View
            style={{
              ...styles.modalContent,
              height: LoginModalState ? "55%" : "65%",
            }}
          >
            <TouchableOpacity onPress={closeModal}>
              <View style={styles.crossIconContainer}>
                <Entypo style={styles.crossIcon} name="cross" color="white" />
              </View>
            </TouchableOpacity>
            {LoginModalState ? (
              <Login onSignUp={() => setLoginModalState(false)} />
            ) : (
              <SignUp
                onLogin={() => {
                  setLoginModalState(true);
                }}
              />
            )}
          </View>
        </Modal>
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
    textAlign: "justify",
    lineHeight: 23,
    marginTop: 12,
  },
  createPostContainer: {
    marginTop: 32,
  },
  postContainer: {
    marginBottom: 50,
  },
  modalContent: {
    backgroundColor: "#27292D",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 30,
    borderColor: "#969696",
    width: "100%",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  crossIconContainer: {
    position: "absolute",
    right: 0,
    top: -20,
    width: 28,
    height: 28,
    backgroundColor: "#131319",
    borderRadius: 100,
  },
  crossIcon: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    paddingTop: 4,
    fontWeight: "bold",
  },
});

export default HomeScreen;
