import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function QuerySubmitBtn(props) {
    console.log(props)
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.SUBMIT} onPress={() => props.navigation.navigate('OTP')}>SUBMIT HERE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 298,
    height: 40,
    backgroundColor: "rgba(96,149,19,1)",
    borderRadius: 20
  },
  SUBMIT: {
    color: "rgba(255,253,253,1)",
    marginTop: 11,
    marginLeft: 103
  }
});

export default QuerySubmitBtn;
