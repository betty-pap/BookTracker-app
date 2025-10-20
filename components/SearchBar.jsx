import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { useState, useEffect } from "react"
import { Ionicons } from '@expo/vector-icons';
import ResultsList from "./ResultsList";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (e) => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`http://localhost:3000/api/books/search/${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data || []);
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  const handleSubmit = () => {
    handleSearch();
  };

  return (
    <View style={styles.searchBar}>
      <TextInput 
        style={styles.searchInput}
        placeholder='Search for a book...'
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
      />
      <Pressable onPress={handleSearch} >
        {/* <Text>Search</Text> */}
        <Ionicons name='search' style={styles.searchBtn} size={26}/>
      </Pressable>

      <ResultsList results={results} onSelect={setSelectedBook}/>

      {/* {!selectedBook && <ResultsList results={results} onSelect={setSelectedBook} />} */}
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    padding: 5,
  },
  searchInput: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  searchBtn: {
    color: Colors.secondary,
  }
})