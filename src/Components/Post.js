import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react';
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const Post = (props) => {
  const { name, profilePic, postMessage, comments, emoji, postTime, isEdited } =
    props;
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.userAllDetails}>
          <View style={styles.userDetails}>
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.name}>{name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.time}>{postTime}</Text>
                {isEdited && <Text style={styles.time}> • Edited</Text>}
              </View>
            </View>
          </View>
          <Entypo name="dots-three-horizontal" size={20} color="#C5C7CA" />
        </View>
        <View style={styles.postMessageContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Text>{emoji}</Text>
            </View>
          </View>
          <Text style={styles.postMessage}>{postMessage}</Text>
        </View>

        <View style={styles.commentContainer}>
          <MaterialCommunityIcons
            name="message-reply-outline"
            size={20}
            color="#C5C7CA"
          />
          <Text style={styles.comments}>{comments} comments</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  box: {
    height: 282,
    backgroundColor: "#27292D",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#35373B",
    width: "100%",
    paddingHorizontal: 12,
  },
  userAllDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  profilePic: {
    borderRadius: 100,
    height: 40,
    width: 40,
  },
  time: {
    fontSize: 14,
    color: "#7F8084",
  },
  name: {
    fontSize: 16,
    color: "#C5C7CA",
  },
  userDetails: {
    flexDirection: "row",
  },
  postMessageContainer: {
    backgroundColor: "#191920",
    height: 140,
    flexDirection: "row",
    paddingRight: 20,
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  postMessage: {
    color: "#7F8084",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.2,
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 12,
  },
  icon: {
    backgroundColor: "#27292D",
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  commentContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  comments: {
    fontSize: 14,
    color: "#7F8084",
    marginLeft: 8,
  },
});

export default Post;
