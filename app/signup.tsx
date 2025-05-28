import { ThemedView } from '@/components/ThemedView'
import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

const signup = () => {
  return (
    <ThemedView>
      <Text style={styles.text}>signup</Text>
      <Link href='/'> Home </Link>
        <Link href='/signup'> Login </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:50,
        textAlign:'center'
    }
})

export default signup