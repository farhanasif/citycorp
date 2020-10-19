import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Feather from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function QuerySuccessScreen({navigation, props}) {
  return (
    <View style={styles.container}>
      <View style={styles.button1Stack}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomeRoot')}>
          <View style={styles.icon3Row}>
            <Feather name="arrow-left" style={styles.icon3}></Feather>
            <Text style={styles.gohome}>GO TO HOME</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Query')}>
          <View style={styles.icon2Row}>
            <Feather name="arrow-right" style={styles.icon2}></Feather>
            <Text style={styles.details}>VIEW DETAILS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/DSCC-logo-final.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <MaterialCommunityIcons
          name="check"
          style={styles.icon}
        ></MaterialCommunityIcons>
      </View>
      <Text style={styles.loremIpsum}>
        YOUR QUERY HAS BEEN {"\n"}SUBMITTED SUCCESSFULLY !!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button1: {
    top: 59,
    width: 200,
    height: 60,
    position: "absolute",
    left: 0,
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    height: 25,
    width: 24
  },
  gohome: {
    
    color: "rgba(96,149,19,1)",
    marginLeft: 20,
    marginTop: 3
  },
  icon3Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 59,
    marginLeft: 28,
    marginTop: 18
  },
  button: {
    top: 0,
    width: 200,
    height: 60,
    position: "absolute",
    left: 0,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    height: 25,
    width: 24
  },
  details: {
    
    color: "rgba(96,149,19,1)",
    marginLeft: 20,
    marginTop: 3
  },
  icon2Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 28,
    marginTop: 18
  },
  button1Stack: {
    width: 200,
    height: 119,
    marginTop: 430,
    marginLeft: 88
  },
  image: {
    top: 0,
    width: 200,
    height: 200,
    position: "absolute",
    left: 0
  },
  icon: {
    top: 188,
    position: "absolute",
    color: "rgba(96,149,19,1)",
    fontSize: 140,
    left: 30
  },
  imageStack: {
    width: 200,
    height: 340,
    marginTop: -549,
    marginLeft: 88
  },
  loremIpsum: {
    
    color: "rgba(96,149,19,1)",
    textAlign: "center",
    fontSize: 16,
    alignSelf: "center"
  }
});

export default QuerySuccessScreen;
