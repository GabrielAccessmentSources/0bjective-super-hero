import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export const PaginationNumber = ({ number, selected }) => {
  return (
      <View style={selected? styles.selected : styles.screen}>
          <Text style={selected? styles.selectedNumberStyle : styles.numberStyle }>{number}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
    screen: {
        width: 30,
        height: 30,
        backgroundColor: 'transparent',
        borderRadius: 50,
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        marginLeft: 47
    },
    selected: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 5,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 47
    },
    numberStyle: {
        marginLeft: 5,
        marginTop: 1,
        color: 'red'
    },
    selectedNumberStyle: {
        marginLeft: 5,
        marginTop: 1,
        color: 'white'
    }
})