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
        width: '70%',
        height: '20%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    outherContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626'
    },
    text: {
        width: '100%',
        textAlign: 'center',
        color: '#000'
    }
})