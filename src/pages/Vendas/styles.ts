import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerCardInfo: {
        flex: 1,
        marginTop: 10,
        padding: 10,
        backgroundColor: 'rgba(254, 241, 187, 0.6)'
    },
    boxVendedorInfo: {
        width: '100%',
        height: 80,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#f2f2ff',
        borderTopWidth: 1,
        borderTopColor: 'rgba(254, 241, 187, 0.8)'
    },
    infoNotRequestsText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#DC0000',
        textAlign: 'center'
    },
    infoData: {
        width: '100%',
        height: 80,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#f2f2ff',
        zIndex: 100000
    },
    contentDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxInfoDetails: {
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#760000',
        marginHorizontal: 10
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#760000',
        marginHorizontal: 10
    },
    info: {
        fontSize: 14,
        fontWeight: '500',
        color: '#760000'
    },
    iconLeft: {
        color: '#ec060e',
        marginRight: 10
    },
    iconRight: {
        color: '#ec060e',
        marginLeft: 8

    },
})