import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HeroDetailBody = ({ description }) => {
  return(
      <View style={heroBodyStyles.containerBody}>
        <Text style={heroBodyStyles.subheaderText}>Description</Text>

        <Text style={heroBodyStyles.textStyle}>{description}</Text>
      </View>
  )
};

export const heroBodyStyles = StyleSheet.create({
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