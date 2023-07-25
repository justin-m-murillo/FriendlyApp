import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  infoContainer: {
    width: '100%',
    height: 'auto',
    padding: 10,
  },
  profileImg: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
    marginBottom: 10,
  },
  profileImgContainer: {
    height: 'auto',
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: 20,
    height: 30,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  textInputStyle: {
    fontSize: 16
  },
  updateBtnText: {
    fontSize: 20
  }
});