import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function QueryHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>WRITE YOUR QUERY DETAILS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 273,
    height: 40,
    backgroundColor: "rgba(96,149,19,1)",
    borderRadius: 13
  },
  loremIpsum: {
    color: "rgba(253,252,252,1)",
    fontSize: 15,
    marginTop: 10,
    marginLeft: 40
  }
});

export default QueryHeader;