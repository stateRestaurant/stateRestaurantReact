import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import Signup from "./components/Signup";
import Landing from "./views/Landing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Landing />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImg: {
    position: "absolute",
    top: 50,
    width: 500,
    height: 300,
    resizeMode: "stretch",
  },
});
