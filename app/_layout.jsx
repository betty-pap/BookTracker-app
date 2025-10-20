import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import SearchBar from '../components/SearchBar'

const RootLayout = () => {
  return (
    <>
      <StatusBar value="auto"/>
      <Stack>
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

        {/* <Stack.Screen name='details/[workId]' options={{ title: "Book Details", headerShown: true }} /> */}
      </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})