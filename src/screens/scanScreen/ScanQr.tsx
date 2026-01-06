import React, { useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { CameraView, BarcodeScanningResult, useCameraPermissions } from 'expo-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Scanner'>;

export default function ScannerScreen({ navigation }: Props) {
    const [permission, requestPermission] = useCameraPermissions();
    const scanned = useRef(false);

    useEffect(() => {
        requestPermission();
    }, []);

    if (!permission?.granted) {
        return <Text>Permissão de câmera necessária</Text>
    }

    function handleBarCodeScanned(barCode: BarcodeScanningResult) {
        if (scanned.current) {
            return;
        }

        const id = barCode.data.split(':')[1]?.trim();

        if (!id) {
            return;
        }

        scanned.current = true;

        navigation.navigate('Pokemon', { id });
    }

    return (
        <CameraView style={{ flex: 1 }} onBarcodeScanned={handleBarCodeScanned} />
    )
}

