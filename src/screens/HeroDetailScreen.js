import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import useDetails from "../hooks/useDetails";
import { HeroDetailHeader } from "../components/molecules/HeroDetailHeader";
import { HeroDetailBody } from "../components/molecules/HeroDetailBody";

export const HeroDetailScreen = ({ navigation }) => {
    const [searchDetails, details, errorMessage] = useDetails();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const id = navigation.getParam('id');

        const fetchData = async() => {
            await searchDetails({ heroId: id });
        }
        fetchData().then(() => setLoader(false) )
    }, []);

    const showData = () => {
        return (
            <>
                <HeroDetailHeader imageUrl={details.thumbnail.path} name={details.name}/>
                <HeroDetailBody description={details.description}/>
            </>
        );
    };

    return (
        <View style={styles.screen}>
            {errorMessage && <Text>{errorMessage}</Text>}
            {loader? (
                <ActivityIndicator animating={loader} color={'red'}/>
            ) : showData()}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 5
    }
});