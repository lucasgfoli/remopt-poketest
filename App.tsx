import React from 'react';
import { ActivityIndicator } from 'react-native'

import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { PokemonProvider } from './src/context/PokemonContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <NavigationContainer>
      <PokemonProvider>
        <AppNavigator />
      </PokemonProvider>
    </NavigationContainer>
  );
}
