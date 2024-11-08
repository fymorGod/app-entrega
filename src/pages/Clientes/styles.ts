import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        backgroundColor: '#f2f2ff',
        zIndex: 100000
    },
    contentDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxInfoDetails: {
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
        paddingHorizontal: 20
    },
    tagInfo: {
        fontSize: 18,
        color: '#333',
        fontWeight: '300',
        marginBottom: 5
    },
   
    listContainer: {
        flex: 1,
        marginTop: 5,
        paddingHorizontal: 20
    },
    tooltipContainer: {
        position: 'absolute',
        top: 60,
        right: 20, 
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 5,
        zIndex: 100000,
        width: 230
    },
    boxTooltipInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    tooltipText: {
        color: '#111',
        fontSize: 12,
        textAlign: 'left',
        marginTop: 5
    },
    tooltipTitle: {
        color: '#333',
        fontSize: 16,
        textAlign: 'left'
    },
})