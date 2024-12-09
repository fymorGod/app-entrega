import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    listContent: {
        padding: 10, 
        marginTop: 5,
        shadowColor: "#0e141c",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxVendedorInfo: {
        width: '100%',
        height: 80,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: 'rgba(220, 0, 0, 0.8)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(220, 0, 0, 0.8)',
        shadowColor: "#0e141c",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 3.84,
        elevation: 5,
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