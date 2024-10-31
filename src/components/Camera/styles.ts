import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        width: '80%',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 24,
        position: 'absolute',
        top: 40,
        borderWidth: 2,
        padding: 10,
        borderColor: '#fff',
        fontWeight: '500',
        color: '#fff'
    },
    textRomaneioInfo: {
        width: '80%',
        textAlign: 'center',
        fontSize: 24,
        paddingHorizontal: 40,
        color: '#fff',
        position: 'absolute',
        bottom: 100,
        fontWeight: '500'
    },
    camera: {
        flex: 1, 
        width: "100%", 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    scannerOverlay: {
        position: 'absolute',
        top: '30%', // Ajuste conforme necessário
        left: '5%',
        right: '5%',
        bottom: '30%', // Ajuste conforme necessário
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Levemente transparente
        zIndex: 1, // Colocado acima da câmera
    },
    scannerBorderTop: {
        position: 'absolute',
        top: '25%',
        left: '5%',
        right: '5%',
        height: 5,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        zIndex: 2,
    },
    scannerBorderBottom: {
        position: 'absolute',
        bottom: '25%',
        left: '5%',
        right: '5%',
        height: 5,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        zIndex: 2,
    }
});
