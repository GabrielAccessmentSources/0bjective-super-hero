import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const PaginationButtons = () => {
    return (
        <View style={styles.screen}>
            <Text>Pagination Buttons</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: "row",
        backgroundColor: 'blue',
        height: 100
    }
})
