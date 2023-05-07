import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HeroDetailBody = ({ description }) => {
  return(
      <View style={styles.containerBody}>
        <Text style={styles.subheaderText}>Description</Text>

        <Text style={styles.textStyle}>{description}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: 20,
    padding: 20
  },
  subheaderText: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 30
  }
});