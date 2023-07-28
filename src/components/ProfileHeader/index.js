import { View, Text, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import IconBtn from '../IconBtn';
import useAmplifySignOut from '../../hooks/useAmplifySignOut';

import { 
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import styles from './styles'
import ProfileImg from '../ProfileImg';


const ProfileHeader = ({ 
  bannerImgUri, 
  profileImgUri, 
  userName 
}) => {
  const navigation = useNavigation();
  const goToCreatePost = () => { navigation.navigate('Create Post'); }
  const goToEditProfile = () => { navigation.navigate('Edit Profile'); }
  const signOut = useAmplifySignOut();

  return (
    <View>
      <View style={styles.bgImgContainer}>
        <Image
          source={{ uri: bannerImgUri }}
          style={styles.bgImg}
        />
      </View>
      <View style={styles.profileImgContainer}>
        <ProfileImg imgKey={profileImgUri} style={styles.profileImg} />
      </View>
      <View style={styles.userNameContainer}>
        <Text style={styles.userNameText}>{userName}</Text>
      </View>
      <View style={{
        marginTop: 12,
        alignItems: 'center', 
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>
        <IconBtn 
          btnIcon={<AntDesign name='pluscircle' size={18} color='white' />}
          btnColor='dodgerblue'
          btnText='Add to Story'
          btnTextStyle={styles.btnAddToStoryText}
          onPress={goToCreatePost}
        />
        <IconBtn 
          btnIcon={<MaterialCommunityIcons name="pencil" size={18} color="black" />}
          btnColor='lightgray'
          btnText='Edit Profile'
          btnTextStyle={styles.btnEditProfileText}
          onPress={goToEditProfile}
        />
        <IconBtn 
          btnIcon={<MaterialIcons name="logout" size={18} color="black" />}
          btnColor='lightgray'
          btnText={null}
          btnTextStyle={null}
          onPress={signOut}
        />
      </View>
      <View style={styles.divider}/>
    </View>
  )
}

export default ProfileHeader;