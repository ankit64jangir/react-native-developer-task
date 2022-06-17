import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: "white", marginTop: 90}}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
});

export default HomeScreen;
