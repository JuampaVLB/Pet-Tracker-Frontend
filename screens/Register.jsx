import React, { useState } from "react";
import axios from "axios";
import {
  ImageBackground,
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from "react-native";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://10.0.2.2:4000/api/v1/auth/signup",
      data: {
        username,
        email,
        password,
      },
    })
      .then(function (response) {

      //  let token = response.headers.get("auth-token");

        Alert.alert(
          `Register Exitoso! ${response.data.user.username} - ${response.data.user.email}`
        );

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/register_fondo.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          defaultValue={username}
          onChangeText={(newText) => setUsername(newText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
        />
        <Button
          title="Register"
          onPress={() => handleSubmit()}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: "80%",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});

export default Register;
