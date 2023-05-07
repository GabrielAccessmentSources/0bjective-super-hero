import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from "react-native";

import useDetails from "../hooks/useDetails";
import { HeroDetailHeader } from "../components/molecules/HeroDetailHeader";

export const HeroDetailScreen = ({ navigation }) => {
    const [searchDetails, details, errorMessage] = useDetails();

    const id = navigation.getParam('id');

    useEffect(() => {
        searchDetails({ heroId: id })
    }, [])

    console.log(details.thumbnail.path)
    return (
        <View style={styles.screen}>
            <HeroDetailHeader imageUrl={details.thumbnail.path} name={details.name}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 5
    }
})