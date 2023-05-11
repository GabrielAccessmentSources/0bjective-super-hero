import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export const PaginationNumber = ({ number, selected }) => {
  return (
      <View
          style={selected? paginationNumberStyles.selected : paginationNumberStyles.screen}
          testID={selected ? 'selected-pagination-number-view' : 'pagination-number-view'}
      >
          <Text style={selected?
              paginationNumberStyles.selectedNumberStyle : paginationNumberStyles.numberStyle
          }
          >
              {number}
          </Text>
      </View>
  )
};

export const paginationNumberStyles = StyleSheet.create({
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