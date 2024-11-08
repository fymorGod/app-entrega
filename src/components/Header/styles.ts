import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        paddingTop: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxIconLeft: {
        padding: 10,
        flex: 1,
        marginRight: 10
    },
    textHeaderContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 24,
        textAlign: 'center',
    },
    boxIconRight: {
        padding: 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    iconRight: {
        color: "#fff",
    },
    iconLeft: {
        color: "#fff",
    },
});
