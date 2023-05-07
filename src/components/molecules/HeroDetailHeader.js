import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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
       backgroundColor: "transparent",
       padding: 10,
       borderBottomWidth: 2,
       borderColor: 'red'
   },
    imageContainer: {
       height: 140,
        width: 140,
        borderRadius: 90,
    },
    textContainer: {
       alignContent: "center",
        width: 250,
        padding: 10,
        marginLeft: 10,
        paddingTop: '18%'
    },
    h1Text: {
       textAlign: "center",
        fontSize: 22,
        color: 'red'
    },
    image: {
       flex: 1,
        borderRadius: 90
    }
});