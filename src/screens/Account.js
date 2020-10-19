import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import AccountDetails from "../components/AccountDetails";

function Account(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/DSCC-logo-final.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/avater.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.biprajitSaha}>Biprajit Saha</Text>
      </View>
      <AccountDetails style={styles.accountDetails} name="Mobile:" details="01717800900"></AccountDetails>
      <AccountDetails style={styles.accountDetails2} name="Email:" details="bips@gmail.com"></AccountDetails>
      <AccountDetails style={styles.accountDetails3} name="Area:" details="Malibag, Dhaka"></AccountDetails>
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
    marginTop: 4,
    alignSelf: "center"
  },
  image2: {
    width: 140,
    height: 140
  },
  biprajitSaha: {
    fontWeight: '700',
    color: "rgba(96,149,19,1)",
    marginLeft: 27,
    marginTop: 30
  },
  loremIpsum: {
    
    color: "rgba(96,149,19,1)",
    marginTop: 53
  },
  male: {
    
    color: "rgba(96,149,19,1)",
    marginLeft: 1,
    marginTop: 78
  },
  icon2: {
    color: "rgba(96,149,19,1)",
    fontSize: 16,
    marginLeft: 43,
    marginTop: 78
  },
  icon1: {
    color: "rgba(96,149,19,1)",
    fontSize: 16,
    marginLeft: 58,
    marginTop: 31
  },
  icon3: {
    color: "rgba(96,149,19,1)",
    fontSize: 16,
    marginLeft: 46,
    marginTop: 54
  },
  image2Row: {
    height: 140,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 17,
    marginRight: 43
  },
  accountDetails: {
    height: 40,
    width: 320,
    marginTop: 33,
    marginLeft: 28
  },
  accountDetails2: {
    width: 320,
    height: 40,
    marginTop: 20,
    marginLeft: 28
  },
  accountDetails3: {
    width: 320,
    height: 40,
    marginTop: 20,
    marginLeft: 28
  }
});

export default Account;
