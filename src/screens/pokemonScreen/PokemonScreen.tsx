import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Image, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/AppNavigator';

import { usePokemon } from '../../context/PokemonContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Pokemon'>;
const bgImage = require('../../assets/background2.png')

export default function PokemonScreen({ route, navigation }: Props) {
  const { id } = route.params;

  const { pokemon, loading, loadPokemon } = usePokemon();

  useEffect(() => {
    loadPokemon(Number(id));
  }, [id]);

  if (loading || !pokemon) {
    return (
      <Container source={bgImage} resizeMode="cover">
        <Loading>
          <ActivityIndicator size="large" color="#fff" />
          <YellowText style={{ marginTop: 20 }}>
            Carregando Pokémon...
          </YellowText>
        </Loading>
      </Container>
    );
  }

  return (

    <Container source={bgImage} resizeMode="cover">
      <SafeContainer>
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
          <YellowText>Nome: {pokemon.name.toUpperCase()}</YellowText>
          <YellowText>Tipo: {pokemon.types}</YellowText>
        </Info>

        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>Voltar</ButtonText>
        </Button>
      </SafeContainer>
    </Container>
  );
}

const Container = styled(ImageBackground)`
  flex: 1;
`;

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  text-transform: capitalize;
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
