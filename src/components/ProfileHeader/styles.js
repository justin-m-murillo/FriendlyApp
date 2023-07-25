import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  bgImg: {
    overflow: 'hidden',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    height: '100%',
  },
  bgImgContainer: {
    width: '100%', 
    height: 220,
    paddingTop: 10,
  },
  profileImg: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'white',
    width: 160,
    height: 160,
  },
  profileImgContainer: {
    alignItems: 'center',
    marginTop: -80,
  },
  userNameContainer: {
    alignItems: 'center',
    marginVertical: 8
  },
  userNameText: {
    fontSize: 18,
    fontWeight: '600',
  },
  btnAddToStoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  btnEditProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    marginTop: 12,
  }
})