import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import QueryHeader from "../components/QueryHeader";
import QueryDetailsCard from "../components/QueryDetailsCard";

function QueryDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/DSCC-logo-final.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <QueryHeader style={styles.queryHeader}></QueryHeader>
      </View>
      <QueryDetailsCard style={styles.queryDetailsCard}></QueryDetailsCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    width: 200,
    height: 200,
    position: "absolute",
    left: 37
  },
  queryHeader: {
    position: "absolute",
    top: 168,
    width: 273,
    height: 40,
    left: 0
  },
  imageStack: {
    width: 273,
    height: 208,
    marginLeft: 51
  },
  queryDetailsCard: {
    height: 394,
    width: 340,
    borderRadius: 17,
    marginTop: 26,
    marginLeft: 18
  }
});

export default QueryDetailsScreen;
