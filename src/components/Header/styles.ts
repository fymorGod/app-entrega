import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconRight : {
        flex: 1,
        position: 'absolute',
        right: 25,
        top: 40,
        color: "#fff"
    },
    iconLeft : {
        flex: 1,
        position: 'absolute',
        left: 25,
        top: 40,
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