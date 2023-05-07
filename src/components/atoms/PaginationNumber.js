import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export const PaginationNumber = ({ number }) => {
  return (
      <View style={styles.screen}>
          <Text style={styles.numberStyle}>{number}</Text>
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
    numberStyle: {
        marginLeft: 5,
        marginTop: 1,
        color: 'red'
    }
})