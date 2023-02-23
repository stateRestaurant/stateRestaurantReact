import axios from "axios";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Image } from "react-native";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    console.log(formData);
    e.preventDefault();

    axios
      .post("http://localhost:3000/signup", formData)
      .then((res) => {
        console.log(res);
        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={{
          uri: "../assets/33943528_213256979277281_6215073786211860480_n.jpeg",
        }}
      /> */}
      <TextInput
        name="email"
        style={styles.input}
        placeholder="email"
        onChangeText={(e) => setFormData({ ...formData, email: e })}
      />

      <TextInput
        name="password"
        style={styles.input}
        placeholder="Password"
        onChangeText={(e) => setFormData({ ...formData, password: e })}
        secureTextEntry
      />

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Signup;
