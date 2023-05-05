import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image} from "react-native";

export const HeroDetailScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    return (
        <View>

        </View>
    );
};