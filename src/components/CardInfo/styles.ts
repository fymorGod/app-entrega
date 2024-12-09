import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardInfo: {
      padding: 16,
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
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    valueText: {
      fontSize: 14,
      marginLeft: 5,
      color: '#333',
      flexWrap: 'wrap',
      flex: 1,
    },
    addressText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginVertical: 8,
    },
    complementRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    containerCardInfo: {
      
      backgroundColor: 'rgba(255, 251, 235, 1)', 
      borderRadius: 8,
      margin: 8,
    },
    actionButtonsContainer: {
      alignItems: 'center',
      marginVertical: 12,
    },
    actionButton: {
      width: '100%',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 4,
      shadowColor: '#f2f2ff',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
    },
    actionButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#fff', 
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10,
      marginTop: -10
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
  