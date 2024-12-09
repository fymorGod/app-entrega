import React, { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation, type RouteProp } from "@react-navigation/native";
import type { BarCodeScannerResult } from "expo-barcode-scanner";
import { Modal } from "../Modal";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes/RootNavigator";
import { api } from "../../api/app";
import { LoadingScreen } from "../Loading";
import { useSalesStore } from "../../store/vendaStore";
import type { Venda, GroupedByCpf } from "../../interfaces/intefaces";
import { organizeDataByCpf } from "../../utils/groupingdata";

interface CameraCodProdutoProps {
    route: RouteProp<{
        Camera: { title: string };
    }>;
}

export const Camera = ({ route }: CameraCodProdutoProps) => {
    const { title } = route.params;
    const { salesData, setSalesData } = useSalesStore(); 
    const [status, requestPermission] = useCameraPermissions();
    const [codigoDeBarras, setCodigoDeBarras] = useState<string>("");
    const [openModal, setVisibleModal] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    if (!status) {
        return (
            <View>
                <Text>Solicitando permissão de câmera...</Text>
            </View>
        );
    }

    if (!status.granted) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Text>Sem acesso à câmera</Text>
                <Modal
                    duration={200}
                    handleClose={setVisibleModal}
                    options={{ type: "slide", from: "top" }}
                    visibleModal={openModal}
                    title="Solicitar permissão"
                    onSubmit={requestPermission}
                />
            </View>
        );
    }

    const handleScan = async (data: BarCodeScannerResult) => {
        console.log("Código de barras escaneado:", data.data);
        if (!data.data) {
            console.error("Código de barras vazio!");
            return;
        }

        setCodigoDeBarras(data.data);
        await getDataRomaneio(data.data);
    };

    const getDataRomaneio = async (codigo: string) => {
        setIsLoading(true); 
        try {
            const response = await api.post("/entrega", {
                app_id: "h2h12h1jkj436dsa008g0nvb7czx8dszx",
                mode: "romaneio_oracle",
                romaneio: codigo,
                empresa: "p",
            });
            
            if (response.status === 202 && Array.isArray(response.data.data)) {
                const organizedData = organizeDataByCpf(response.data.data);
                setSalesData(organizedData);
                navigation.navigate('Clientes')
            } else {
                console.error("Unexpected API response:", response);
            }
            
        } catch (error) {
            console.error("Erro ao buscar dados do romaneio:", error);
        } finally {
            setIsLoading(false); 
        }
    };

    
    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <CameraView
            onBarcodeScanned={handleScan}
            style={styles.camera}
            barcodeScannerSettings={{
                barcodeTypes: ["ean13", "code128"],
            }}
            pictureSize={"1920x1080"}
        >
            <View style={styles.scannerOverlay} />
            <View style={styles.scannerBorderTop} />
            <View style={styles.scannerBorderBottom} />
        </CameraView>
    );
};
