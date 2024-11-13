import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCardInfo: {
      padding: 16,
      backgroundColor: '#FFF4CC', 
      borderRadius: 8,
      margin: 8,
    },
    cardInfo: {
      flexDirection: 'column',
    },
    infoGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    infoColumn: {
      width: '45%', 
      marginBottom: 4,
    },
    labelText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    },
    valueText: {
      fontSize: 14,
      color: '#333',
      flexWrap: 'wrap',
      flex: 1,
    },
    addressText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginVertical: 8,
    },
    complementRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    actionButtonsContainer: {
      alignItems: 'center',
      marginVertical: 12,
    },
    actionButton: {
      width: '100%',
      paddingVertical: 12,
      backgroundColor: '#FFF',
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 4,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
    },
    actionButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#666',
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 8,
    },
    iconButton: {
      alignItems: 'center',
      width: '40%',
    },
    iconText: {
      fontSize: 14,
      color: '#333',
      marginTop: 4,
    },
  });
  