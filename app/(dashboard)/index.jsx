import { StyleSheet, Text, View } from 'react-native'
import {Colors} from '../../constants/Colors'
import SearchBar from '../../components/SearchBar'

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar style={styles.searchBar}/>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 38,
  },
  searchBar: {
    position: 'absolute',
    top: 0,

  }
})