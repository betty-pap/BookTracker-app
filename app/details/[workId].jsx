import { StyleSheet, Text, View, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from "react";

const Details = () => {
  const { workId } = useLocalSearchParams(); // Gets the [workId] from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/books/details/${workId}`);
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [workId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Book not found</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>By: {book.authors?.[0]?.name || 'Unknown Author'}</Text>
      <Text style={styles.description}>
        {book.description || 'No description available'}
      </Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
})