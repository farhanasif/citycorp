import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ItemHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.services}>SERVICES</Text>
      </View>
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
    shadowRadius: 0
  },
  rect: {
    width: 160,
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
  services: {
    fontWeight: "700",
    color: "rgba(232,232,218,1)",
    fontSize: 17,
    marginTop: 19,
    marginLeft: 39
  }
});

export default ItemHeader;
