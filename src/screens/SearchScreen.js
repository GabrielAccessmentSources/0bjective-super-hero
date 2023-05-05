import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export const SearchScreen = () => {
  return (
      <ScrollView style={styles.screen}>
          <Text>SearchScreen</Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});