import react from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";

export const HeroDetailHeader = ({ name, imageUrl }) => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: `${imageUrl}/portrait_medium.jpg` }}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={ styles.h1Text}>{name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   headerContainer: {
       flexDirection: "row",
       height: 200,
       backgroundColor: "blue",
       padding: 10
   },
    imageContainer: {
       height: 130,
        width: 130,
        borderRadius: 90,
        backgroundColor: 'red',
    },
    textContainer: {
       alignContent: "center",
        width: 250,
        padding: 10,
        backgroundColor: "green",
        marginLeft: 20,
        paddingTop: '18%'
    },
    h1Text: {
       textAlign: "center",
        fontSize: 20
    },
    image: {
       flex: 1,
        borderRadius: 90
    }
});