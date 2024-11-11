import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    blockContainer: {
        width: 80,
        height: 80,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    block: {
        width: 30,
        height: 30,
        margin: 4,
        borderRadius: 6,
    },
    block1: {
        backgroundColor: '#DC0000',
    },
    block2: {
        backgroundColor: '#FF3B3B',
    },
    block3: {
        backgroundColor: '#FF6666',
    },
    block4: {
        backgroundColor: '#FF9999',
    },
    loadingText: {
        fontSize: 18,
        color: '#DC0000',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
        letterSpacing: 1.2,
    },
});
