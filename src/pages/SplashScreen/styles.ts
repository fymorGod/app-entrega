import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#760000'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        marginTop: 10
    },
    logo : {
        width: 115,
        height: 120,
        resizeMode: 'cover'
    },
    boxImage: {
        position: 'absolute',
        bottom: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoPotiguar : {
        width: 100,
        resizeMode: 'contain'
    }
})