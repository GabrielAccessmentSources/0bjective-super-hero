import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import { SearchBar } from "../components/SearchBar";
import { ResultsList } from "../components/ResultsList";
import useResults from "../hooks/useResults";
import { PaginationButtons } from "../components/PaginationButtons";

export const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, results, errorMessage] = useResults();


  return (
      <>
          <View style={styles.topView}>
              <Text style={styles.textStyle}>Nome do Personagem</Text>
              <SearchBar
                  term={term}
                  onTermChange={setTerm}
                  onTermSubmit={() => searchApi(term)}
              />
          </View>

          <View style={styles.scrollScreen}>
              <ResultsList
                results={results}
              />
          </View>

          <PaginationButtons/>
      </>
  );
};

const styles = StyleSheet.create({
    topView: {
      margin: 10
    },
    scrollScreen: {
        height: 550,
        backgroundColor: 'green'
    },
    textStyle: {
        fontFamily: 'roboto-black',
        fontSize: 16,
        marginLeft: 18,
        color: 'red'
    }
});