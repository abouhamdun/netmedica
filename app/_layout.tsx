import { Stack } from 'expo-router';
import "../global.css";

export default function RootLayout() {

  // const colorScheme = useColorScheme()
  // const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Stack >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
