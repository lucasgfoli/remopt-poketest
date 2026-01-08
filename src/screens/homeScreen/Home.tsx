import React from 'react';
import { Alert, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { useCameraPermissions } from 'expo-camera';

const bgImage = require('../../assets/background.png');

export default function Home({ navigation }: any) {
	const [permission, requestPermission] = useCameraPermissions();

	const scanQr = async () => {
		if (!permission?.granted) {
			const { granted } = await requestPermission();
			if (!granted) {
				Alert.alert('Erro', 'É necessário permitir o acesso à câmera!');
				return;
			}
		}

		navigation.navigate('Scanner');
	}

	const favorites = async () => {
		navigation.navigate('Favorites')
	}

	return (
		<Container source={bgImage} resizeMode="cover">
			<Title>LUCAS GABRIEL FERNANDES OLIVEIRA</Title>

			<ButtonsWrapper>
				<ScanButton onPress={scanQr}>
					<ButtonText>Scannear QRCODE</ButtonText>
				</ScanButton>
				<FavoritesButton onPress={favorites}>
					<ButtonText>Meus favoritos</ButtonText>
				</FavoritesButton>
			</ButtonsWrapper>
		</Container>
	);
}

const Container = styled(ImageBackground)`
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	padding-top: 60px;
	
`;

const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: red;
	padding: 10px 20px;
	border-radius: 9px;
`;

const ScanButton = styled.TouchableOpacity`
	background-color: white;
	padding: 20px 10px;
	width: 80%;
	align-items: center;
	margin-bottom: 12px;
`;

const ButtonText = styled.Text`
	color: black;
	font-size: 18px;
	font-weight: bold;
`;

const FavoritesButton = styled.TouchableOpacity`
	background-color: white;
	padding: 20px 10px;
	width: 80%;
	align-items: center;
`;

const ButtonsWrapper = styled.View`
	position: absolute;
	bottom: 20px;
	width: 75%;
	align-items: center;
`;


