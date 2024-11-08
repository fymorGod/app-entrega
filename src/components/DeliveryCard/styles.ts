import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardInfo: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        zIndex: -1
    },
    wrapperInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    ordem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    entrega: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '400',
    },
    status: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between'
    },
    textStatus: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '400',
    },
    boxTagStatus: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    tagStatus: {
        fontSize: 12,
        fontWeight: '500',
    },
    clientInfo: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clientText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
    },
    clientBairro: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
});
