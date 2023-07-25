import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 4/3,
    alignSelf: 'center',
    marginVertical: 24,
  },
  name: {
    fontWeight: '500'
  },
  icon: {
    marginLeft: 'auto',
  },
  imagePickerContainer: {
    justifyContent: 'center',
    marginLeft: 'auto'
  }
})