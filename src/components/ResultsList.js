import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

export const ResultsList = withNavigation(({results, navigation}) => {
    if(!results.length){
        return null;
    }

    return (
        <View>
            <FlatList
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity
                            style={styles.screen}
                            onPress={() => navigation.navigate('HeroDetail', { id: item.id})}>
                            <Image
                                style={styles.image}
                                source={{ uri: `${item.thumbnail.path}/portrait_medium.jpg` }}
                            />
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}

            />
        </View>
    );
});

const styles = StyleSheet.create({
   screen: {
       flex: 1,
       alignContent: "center",
       flexDirection: "row",
       paddingTop: 18,
       paddingBottom: 18,
       borderBottomColor: 'red',
       borderBottomWidth: 2,
       margin: 10
   },
    image: {
       width: 50,
        height: 50,
        borderRadius: 30
    }
});
