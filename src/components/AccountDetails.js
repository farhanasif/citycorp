import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

function AccountDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.mobileRow}>
          <Text style={styles.mobile}>{props.name} :</Text>
          <Text style={styles.loremIpsum2}>{props.details}</Text>
          <Entypo name="edit" style={styles.icon}></Entypo>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 320,
    height: 40,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  mobile: {
    fontWeight: '700',
    color: "#121212",
    marginTop: 5
  },
  loremIpsum2: {
    
    color: "#121212",
    marginLeft: 8,
    marginTop: 7
  },
  icon: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    height: 26,
    width: 24,
    marginLeft: 130
  },
  mobileRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 16,
    marginTop: 7
  }
});

export default AccountDetails;
