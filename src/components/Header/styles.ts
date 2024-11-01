import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconRight : {
        flex: 1,
        position: 'absolute',
        right: 20,
        top: 45,
        color: "#fff"
    },
    iconLeft : {
        flex: 1,
        position: 'absolute',
        left: 30,
        top: 45,
        color: "#fff"
    },
    textHeader: {
        flex: 1,
        color: '#fff',
        fontWeight: '500',
        fontSize: 24,
        textAlign: 'center'
    },
})