
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Entypo';


function Splash({ navigation }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
        >
            <Image
                source={require("../assets/images/DSCC-logo-final.png")}
                resizeMode="contain"
                style={styles.image}
            ></Image>
        </TouchableOpacity>
      
      <Feather name="loader" style={styles.icon}></Feather>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247,247,247,1)"
  },
  image: {
    width: 260,
    height: 250,
    marginTop: 152,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 107,
    marginLeft: 168
  }
});

export default Splash;
