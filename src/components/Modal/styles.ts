import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: '75%',
        height: '24%',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    outherContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
    },
    text: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '500',
        color: '#fff'
    },
    header: {
        height: 60,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAtention: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    },
    blur: {
        flex: 1
    },
    info: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#333'
    },
    boxConfirmation: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        justifyContent: 'center',
        gap: 20,
        flexDirection: 'row'
    },
    btnCancel: {
        width: 120,
        height: 60,
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ED1C24',
        overflow: 'hidden',
        backgroundColor: '#ED1C24' 
    },
    btnConfirm: {
        width: 120,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#34C94A',
        overflow: 'hidden',
        backgroundColor: '#34C94A' 
    }
})