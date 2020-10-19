import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text } from "react-native";
import QueryHeader from "../components/QueryHeader";
import QuerySubmitBtn from "../components/QuerySubmitBtn";

function Query({navigation, props }) {
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
      <TextInput
        placeholder="Details of your query..."
        numberOfLines={5}
        multiline={true}
        inlineImagePadding={1}
        style={styles.placeholder}
      ></TextInput>
      <View style={styles.picStackRow}>
        <View style={styles.picStack}>
          <Text style={styles.pic}>ADD PICTURE</Text>
          <Image
            source={require("../assets/images/placeholder-img-1.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Image
            source={require("../assets/images/placeholder-img-1.jpg")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </View>
        <View style={styles.image3Stack}>
          <Image
            source={require("../assets/images/placeholder-img-1.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Image
            source={require("../assets/images/placeholder-img-1.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </View>
      </View>
      <QuerySubmitBtn style={styles.querySubmitBtn} navigation={navigation}></QuerySubmitBtn>
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
    top: 180,
    left: 0,
    height: 40,
    width: 273
  },
  imageStack: {
    width: 273,
    height: 220,
    marginLeft: 51
  },
  placeholder: {
    color: "#121212",
    height: 100,
    width: 300,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderWidth: 1,
    borderColor: "rgba(96,149,19,1)",
    borderRadius: 11,
    opacity: 0.93,
    marginTop: 8,
    marginLeft: 38
  },
  pic: {
    top: 0,
    left: 12,
    position: "absolute",
    fontWeight: '700',
    color: "rgba(96,149,19,1)"
  },
  image2: {
    top: 10,
    left: 0,
    width: 120,
    height: 120,
    position: "absolute"
  },
  image5: {
    top: 108,
    left: 1,
    width: 120,
    height: 120,
    position: "absolute"
  },
  picStack: {
    width: 121,
    height: 228
  },
  image3: {
    top: 0,
    left: 0,
    width: 120,
    height: 120,
    position: "absolute"
  },
  image4: {
    top: 98,
    left: 1,
    width: 120,
    height: 120,
    position: "absolute"
  },
  image3Stack: {
    width: 121,
    height: 218,
    marginLeft: 59,
    marginTop: 10
  },
  picStackRow: {
    height: 228,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 39,
    marginRight: 35
  },
  querySubmitBtn: {
    height: 40,
    width: 298,
    marginTop: 51,
    marginLeft: 40
  }
});

export default Query;
