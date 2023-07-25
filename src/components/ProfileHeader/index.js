import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import IconBtn from '../IconBtn';

import { 
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import styles from './styles'

const ProfileHeader = ({ 
  bannerImgUri, 
  profileImgUri, 
  userName 
}) => {
  return (
    <View>
      <View style={styles.bgImgContainer}>
        <Image 
          source={{ uri: bannerImgUri }}
          style={styles.bgImg}
        />
      </View>
      <View style={styles.profileImgContainer}>
        <Image 
          source={{ uri: profileImgUri }}
          style={styles.profileImg}
        />
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
        />
        <IconBtn 
          btnIcon={<MaterialCommunityIcons name="pencil" size={18} color="black" />}
          btnColor='lightgray'
          btnText='Edit Profile'
          btnTextStyle={styles.btnEditProfileText}
        />
        <IconBtn 
          btnIcon={<MaterialIcons name="logout" size={18} color="black" />}
          btnColor='lightgray'
          btnText={null}
          btnTextStyle={null}
        />
      </View>
      <View style={styles.divider}/>
    </View>
  )
}

export default ProfileHeader;