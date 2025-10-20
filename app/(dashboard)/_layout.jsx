import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'

const DashboardLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: 'Home', headerShown: false, tabBarIcon: ({focused}) => (
        <Ionicons 
          size={24}
          name={focused ? 'home' : 'home-outline'}
          color={Colors.secondary}
        />
      )}}/>
      <Tabs.Screen name='shelves' options={{title: "Shelves", tabBarIcon: ({focused}) => (
        <Ionicons 
          size={24}
          name={focused ? 'book' : 'book-outline'}
          color={Colors.secondary}
        />
      )}}/>
      <Tabs.Screen name='explore' options={{title: "Explore", tabBarIcon: ({focused}) => (
        <Ionicons 
          size={24}
          name={focused ? 'compass' : 'compass-outline'}
          color={Colors.secondary}
        />
      )}}/>
      <Tabs.Screen name='profile' options={{title: "Profile", tabBarIcon: ({focused}) => (
        <Ionicons 
          size={24}
          name={focused ? 'person' : 'person-outline'}
          color={Colors.secondary}
        />
      )}}/>
    </Tabs>
   
  )
}

export default DashboardLayout

const styles = StyleSheet.create({

})