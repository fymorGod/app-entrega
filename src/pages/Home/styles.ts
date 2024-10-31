import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    formContainer: {
        width: '100%',
        marginTop: 10,
        alignSelf: 'center',
        paddingHorizontal: 30
    },
    inputContainer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: '#f2f2ff',
        overflow: 'hidden',
    },
    iconLeft: {
        marginRight: 0,
    },
    input: {
        width: '92%',
        borderWidth: 0,
        borderRadius: 0,
        borderRightWidth: 1,
        borderRightColor: '#f76'
    },
    iconRight: {
        marginLeft: -20,
    },
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'left',
        color: '#760000',
        marginTop: 30,
        marginBottom: 10
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 5
    },
    footerContainer: {  
        position: 'absolute',
        bottom: 30,
        width: '100%',
        paddingHorizontal: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },
    btnBuscar: {
        width: '80%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, 
    },
    textBuscar: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    }
});
