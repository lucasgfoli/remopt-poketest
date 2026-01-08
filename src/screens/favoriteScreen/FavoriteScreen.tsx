import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { usePokemon } from "../../context/PokemonContext";
import styled from "styled-components/native";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

const bgImage = require('../../assets/background2.png');

export default function FavoriteScreen({ navigation }: Props) {
    const { favorites } = usePokemon();

    return (
        <Container source={bgImage} resizeMode="cover">
            <Header>
                <Title>
                    FAVORITOS
                </Title>
            </Header>

            <FlatList
                data={favorites}
                keyExtractor={(item => item.id.toString())}
                renderItem={({ item }) => (
                    <Info>
                        <Card>
                            <YellowText>{item.name}</YellowText>
                            <PokemonImg
                                source={{ uri: item.sprite }}
                                resizeMode="contain"
                            />
                            <YellowText>{item.types}</YellowText>
                        </Card>
                    </Info>
                )}

                ListEmptyComponent={() => (
                    <View style={{ marginTop: 50, alignItems: 'center' }} >
                        <Text style={{ color: 'white' }}>
                            Nenhum favorito ainda
                        </Text>
                    </View>
                )}
            />

            <ButtonsWrapper>
                <Button onPress={() => navigation.navigate('Home')}>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </Button>
            </ButtonsWrapper>
        </Container>
    )
}

const Container = styled(ImageBackground)`
    flex: 1;
`;

const Header = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const Title = styled.Text`
    color: yellow;
    font-size: 30px;
    font-weight: bold;
`;

const Card = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 15px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PokemonImg = styled.Image`
    width: 80px;
    height: 80px;
`;

const YellowText = styled.Text`
  color: yellow;
  font-size: 24px;
  text-transform: capitalize;
`;

const Button = styled.TouchableOpacity`
   background-color: white;
	padding: 20px 10px;
	width: 70%;
	align-items: center;
`;

const ButtonText = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

const ButtonsWrapper = styled.View`
    position: absolute;
    bottom: 20px;
    width: 100%;
    align-items: center;
`;
