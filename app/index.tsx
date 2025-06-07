import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function welcome() {
  return (
    <View>
      <Text style={styles.text} className='text-green-800'>Home</Text>
      <Link style={{textAlign:'center',fontSize:30}} href='/login'>Login</Link>
      <Link style={{textAlign:'center',fontSize:30}} href='/signup'>Register</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:50,
        textAlign:'center'
    }
})
