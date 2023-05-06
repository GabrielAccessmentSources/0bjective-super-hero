import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchBar } from "../components/SearchBar";
import { ResultsList } from "../components/ResultsList";
import useResults from "../hooks/useResults";
import { PaginationButtons } from "../components/particles/PaginationButtons";

export const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, results, errorMessage] = useResults();
   const [page, setPage] = useState(0);

   useEffect(() => {
       searchApi({ searchHero: term, page: page })
   },[results, page])


   const fetchResults = useMemo(() => {
       return(
           <>
               <ResultsList
                   results={results} page={0}
               />
           </>
       )
   }, [results, page]);

  return (
      <>
          <View style={styles.topView}>
              <Text style={styles.textStyle}>Nome do Personagem</Text>
              <SearchBar
                  term={term}
                  onTermChange={setTerm}
                  onTermSubmit={() => searchApi({ searchHero: term })}
              />
          </View>

          <View style={styles.scrollScreen}>
              {fetchResults}
          </View>

          <PaginationButtons
            page={page}
            onPageChange={setPage}
          />
      </>
  );
};

const styles = StyleSheet.create({
    topView: {
      margin: 10
    },
    scrollScreen: {
        height: 550,
    },
    textStyle: {
        // fontFamily: 'roboto-black',
        fontSize: 16,
        marginLeft: 18,
        color: 'red'
    }
});