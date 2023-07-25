import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  // Button Row
  buttonsRow: {
    height: 40,
    flexDirection: 'row',
    alignContent: 'center',
    //justifyContent: 'space-around',
  },  
  iconButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonText: {
    marginLeft: 5,
    color: 'gray',
    fontWeight: '500',
  }
})