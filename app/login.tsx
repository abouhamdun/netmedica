import { ThemedView } from '@/components/ThemedView'
import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

const login = () => {
  return (
    <ThemedView>
      <Text style={styles.container}>Login</Text>
      <Link href='/'> Home </Link>
      <Link href='/signup'> SignUp </Link>
    </ThemedView>
  )
}
 const styles = StyleSheet.create({
    container:{
        textAlign:'center',
        fontSize:40
    }
 })
export default login