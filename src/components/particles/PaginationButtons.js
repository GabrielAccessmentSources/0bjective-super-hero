import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'

import { PaginationNumber } from "../atoms/PaginationNumber";

export const PaginationButtons = ({ page, onPageChange }) => {
    // Nums will be from 1 to 3 it'll show data from 0-5, 5-10 and 10-11
    const onPressForward = () => {
        onPageChange(page + 5)
    };

    const onPressBackwards = () => {
        onPageChange(page - 5)
    }
    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.arrows} onPress={() => onPressBackwards()}>
                <AntDesign name="caretleft" size={18} color="red" />
            </TouchableOpacity>

            <View style={styles.numsContainer}>
                {/*Change this to a flatlist */}
                <TouchableOpacity>
                    <PaginationNumber number={1} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <PaginationNumber number={2} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <PaginationNumber number={3} />
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.arrows} onPress={() => onPressForward()}>
                <AntDesign name="caretright" size={18} color="red" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: "row",
        backgroundColor: 'transparent',
        height: 100,
        paddingTop: 18,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 24
    },
    numsContainer: {
      width: 290,
      height: 35,
        padding: 2,
      backgroundColor: 'transparent',
        flexDirection: "row",
    },
    arrows: {
        width: 38,
        height: 38,
        backgroundColor: 'transparent',
        borderRadius: 50,
        padding: 10
    }
})
