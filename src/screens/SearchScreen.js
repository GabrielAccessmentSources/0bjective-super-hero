import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import { SearchBar } from "../components/SearchBar";
import { ResultsList } from "../components/ResultsList";
import useResults from "../hooks/useResults";

export const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, results, errorMessage] = useResults();


  return (
      <>
          <View>
              <Text>Nome do Personagem</Text>
              <SearchBar
                  term={term}
                  onTermChange={setTerm}
                  onTermSubmit={() => searchApi(term)}
              />
          </View>

          <ScrollView style={styles.screen}>
              <ResultsList
                results={results}
              />
          </ScrollView>
      </>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});