import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function QueryButton( props ) {
  console.log(props)
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('QueryHome')}>
        <Text style={styles.loremIpsum5}>HAVE QUERY ? SUBMIT QUERY HERE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 25
  },
  button: {
    width: 296,
    height: 60,
    backgroundColor: "rgba(96,149,19,1)",
    shadowColor: "rgba(168,165,165,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 12,
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 25
  },
  loremIpsum5: {
    color: "rgba(255,253,253,1)",
    fontSize: 16,
    marginTop: 21,
    marginLeft: 21
  }
});

export default QueryButton;
