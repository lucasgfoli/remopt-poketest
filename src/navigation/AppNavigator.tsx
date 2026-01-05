import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen/Home';
import ScannerScreen from '../screens/scanScreen/ScanQr';
import PokemonScreen from '../screens/pokemonScreen/PokemonScreen';

export type RootStackParamList = {
  Home: undefined;
  Scanner: undefined;
  Pokemon: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scanner" component={ScannerScreen} />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
