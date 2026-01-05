import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { Image, Alert, ActivityIndicator } from 'react-native';
import { ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/AppNavigator';

import { getPokemonById } from '../../services/pokeApi';
import { Pokemon } from '../../types/Pokemon';

type Props = NativeStackScreenProps<RootStackParamList, 'Pokemon'>;
const bgImage = require('../../assets/background2.png')

const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20px 30px 20px;
`;

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
`;

const Header = styled.View`
  width: 100%;
  align-items: center;
`;

const PokemonImg = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Info = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: flex-start;
`;

const YellowText = styled.Text`
  color: yellow;
  font-size: 24px;
`;

const Button = styled.TouchableOpacity`
	background-color: white;
	padding: 15px;
  margin-top: 30px;
	width: 50%;
	align-items: center;
`;

const ButtonText = styled.Text`
	color: black;
	font-size: 18px;
	font-weight: bold;
`;

export default function PokemonScreen({ route, navigation }: Props) {
  const { id } = route.params;

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function loadPokemon() {
      try {
        const data = await getPokemonById(id);
        setPokemon(data);
      } catch {
        Alert.alert('Erro: Pokemon não encontrado!');
        navigation.goBack();
      }
    }

    loadPokemon();
  }, [id]);

  if (!pokemon) {
    return (
      <Loading>
        <ActivityIndicator size="large" />
        <YellowText>Carregando Pokémon...</YellowText>
      </Loading>
    );
  }

  return (
    <Container source={bgImage} resizeMode="cover">

      <Header>
        <YellowText>ID: {pokemon.id}</YellowText>
      </Header>

      <PokemonImg>
        <Image
          source={{ uri: pokemon.sprite }}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        />
      </PokemonImg>

    <Info>
      <YellowText>Nome: {pokemon.name}</YellowText>
      <YellowText>Tipo: {pokemon.types}</YellowText>
    </Info>

      <Button onPress={() => navigation.navigate('Home')}>
        <ButtonText>Voltar</ButtonText>
      </Button>
    </Container>
  );
}