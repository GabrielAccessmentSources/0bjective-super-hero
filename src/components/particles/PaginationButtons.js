import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'

import { PaginationNumber } from "../atoms/PaginationNumber";

export const PaginationButtons = ({ page, onPageChange }) => {
    const [counter, setCounter ] = useState(1)

    const onPressForward = () => {
        setCounter(counter + 1)
        onPageChange(page + 5)
    };

    const onPressBackwards = () => {
        setCounter(counter - 1)
        onPageChange(page - 5)
    };

    const onPressForwardTwoTimes = () => {
        setCounter(counter + 2)
        onPageChange(page + 10)
    };

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                style={styles.arrows}
                onPress={() => onPressBackwards()}
                disabled={page === 0}
            >
                <AntDesign name="caretleft" size={18} color="red" />
            </TouchableOpacity>

            <View style={styles.numsContainer}>
                <TouchableOpacity disabled={page === 0}>
                    <PaginationNumber number={counter} selected={true} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressForward()}>
                    <PaginationNumber number={counter + 1} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressForwardTwoTimes()}>
                    <PaginationNumber number={counter + 2} />
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
