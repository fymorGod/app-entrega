import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e30000',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ffe5e5',
    fontSize: 14,
  },
  noImagesText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#e30000',
  },
  gallery: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  imageWrapper: {
    position: 'relative',
    flex: 1,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffe5e5',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  deleteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 6,
    borderRadius: 20,
    zIndex: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    backgroundColor: '#e30000',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  cameraIcon: {
    color: '#fff',
    fontSize: 24,
  },
  uploadButton: {
    backgroundColor: '#e30000',
    padding: 26,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 26,
  },
  uploadButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#e30000',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
});
