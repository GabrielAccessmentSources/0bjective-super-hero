import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={SearchBarStyles.background}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={SearchBarStyles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                testID={'search-bar-input'}
            />
        </View>
    );
};

export const SearchBarStyles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,

    }
});
