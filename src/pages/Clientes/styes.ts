import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    infoData: {
        width: '100%',
        height: 80,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2ff'
    },
    contentDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxInfoDetails: {
        gap: 10,
        marginLeft: -40,
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
        color: '#ec060e'
    },
    sectionEntregas: {
        padding: 20
    },
    tagInfo: {
        fontSize: 18,
        color: '#333',
        fontWeight: '300'
    },
    cardInfo: {
        width: '100%',
        height: 130,
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    wrapperInfo: {
        width: '100%',
        height: '100%',
        paddingTop:10,
        paddingHorizontal: 20,
        gap:5,
        borderWidth: 1,
        borderColor: '#1ced26',
        borderRadius: 10,
    },
    ordem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    clientInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    clientText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500'
    },
    entrega: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '300'
    },
    textStatus: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '300'
    },
    tagStatus: {
        fontSize: 12,
        color: '#0F8120',
        padding: 5,
        fontWeight: '500',
        backgroundColor: '#fff',
        borderRadius: 50
    },
    clientBairro: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500'
    }
})