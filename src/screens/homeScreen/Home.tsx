import React from 'react';
import { Alert, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { useCameraPermissions } from 'expo-camera';

const bgImage = require('../../assets/background.png');

const Container = styled(ImageBackground)`
	flex: 1;
	justify-content: space-between;
	align-items: center;
	padding-top: 60px;
	padding-bottom: 40px;
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
	width: 50%;
	align-items: center;
`;

const ButtonText = styled.Text`
	color: black;
	font-size: 18px;
	font-weight: bold;
`;

export default function Home({ navigation }: any) {
	const [permission, requestPermission] = useCameraPermissions();

	const handlePress = async () => {
		if (!permission?.granted) {
			const { granted } = await requestPermission();
			if (!granted) {
				Alert.alert('Erro', 'É necessário permitir o acesso à câmera!');
				return;
			}
		}

		navigation.navigate('Scanner');
	};

	return (
		<Container source={bgImage} resizeMode="cover">
			<Title>LUCAS GABRIEL FERNANDES OLIVEIRA</Title>

			<ScanButton onPress={handlePress}>
				<ButtonText>Scannear QRCODE</ButtonText>
			</ScanButton>
		</Container>
	);
}
