import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({results, onSelect}) => {
  const navigation = useNavigation();

  // Don't render anything if no results
  if (!results || results.length === 0) {
    return null;
  }

  const handleBookSelect = (book) => {
    onSelect(book);
    const workId = book.key.replace("/works/", "");
    navigation.navigate("Details", { workId });
  };

  const renderBookItem = ({ item: book }) => {
    const workId = book.key.replace("/works/", "");
    
    return (
      <Pressable
        style={styles.bookItem}
        onPress={() => handleBookSelect(book)}
      >
        <Image
          source={{
            uri: book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/100x150?text=No+Cover",
          }}
          style={styles.cover}
          alt={book.title}
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {book.title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>
            {book.author_name && book.author_name[0]}
          </Text>
        </View>
      </Pressable>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({})