// import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-svg';
import Text from './src/components/Text/Text';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import { colors } from './src/theme/color';

export default function App() {

  const [loaded] = useFonts({
    Antonio: require('./assets/fonts/Antonio-Regular.ttf'),
    Spartan: require('./assets/fonts/Spartan-Regular.ttf'),
    SpartanBold: require('./assets/fonts/Spartan-Bold.ttf'),
  })

  if (!loaded) {
    return <Text>Text Font Loading....</Text>
  }


  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.balck,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
