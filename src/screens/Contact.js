import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Contact(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/DSCC-logo-final.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.emergency}>EMERGENCY CONTACT</Text>
      <Text style={styles.loremIpsum}>
        DHAKA SOUTH CITY CORPORATION{"\n"}NAGAR BHABAN, DHAKA-১০০০{"\n"}PHONE NO:
        02-9556014{"\n"}EMAIL: info@dscc.gov.bd{"\n"}WEB: www.dscc.gov.bd
        {"\n"}FACEBOOK: www.facebook.com/officialpage.dscc/
      </Text>
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
    marginTop: 11,
    alignSelf: "center"
  },
  emergency: {
    color: "rgba(96,149,19,1)",
    fontSize: 16,
    marginTop: 31,
    alignSelf: "center"
  },
  loremIpsum: {
    color: "rgba(96,149,19,1)",
    textAlign: "center",
    marginTop: 37,
    alignSelf: "center"
  }
});

export default Contact;
