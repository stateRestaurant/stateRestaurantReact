import React from "react";
import Signup from "../components/Signup";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 300,
  },
});

const Landing = () => {
  return (
    <View>
      <View>
        <Image
          source={require("../assets/33943528_213256979277281_6215073786211860480_n.jpeg")}
          style={styles.logo}
        />
      </View>
      <Signup></Signup>
    </View>
  );
};

export default Landing;
