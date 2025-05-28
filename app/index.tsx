import { ThemedView } from '@/components/ThemedView'
import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

export default function welcome() {
  return (
    <ThemedView>
      <Text style={styles.text}>Home</Text>
      <Link style={{textAlign:'center',fontSize:30}} href='/login'>Login</Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:50,
        textAlign:'center'
    }
})
