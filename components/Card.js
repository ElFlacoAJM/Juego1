import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card =() => {
  return <View style={styles.inputContainer}>{Children}</View>
};

const styles = StyleSheet.create({
    inputContainer:{
        width: 300,
        padding: 20,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white"
    },
});