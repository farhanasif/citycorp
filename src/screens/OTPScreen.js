import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function OtpScreen({ navigation, props }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/DSCC-logo-final.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.loremIpsum}>Write down the OTP send to your mobile</Text>
      <TextInput
        placeholder=" 4 Digit OTP..."
        style={styles.placeholder}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.submit} onPress={() => navigation.navigate('Success')}>SUBMIT YOUR QUERY</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center"
  },
  loremIpsum: {
    fontWeight: "700",
    color: "rgba(96,149,19,1)",
    marginTop: 60,
    alignSelf: "center"
  },
  placeholder: {
    
    color: "#121212",
    height: 40,
    width: 120,
    borderWidth: 1,
    borderColor: "rgba(96,149,19,1)",
    borderRadius: 15,
    textAlign: "left",
    letterSpacing: 2,
    marginTop: 40,
    alignSelf: "center"
  },
  button: {
    width: 243,
    height: 46,
    backgroundColor: "rgba(96,149,19,1)",
    borderRadius: 18,
    marginTop: 20,
    alignSelf: "center"
  },
  submit: {
    
    color: "rgba(255,255,255,1)",
    marginTop: 13,
    alignSelf: "center"
  }
});

export default OtpScreen;
