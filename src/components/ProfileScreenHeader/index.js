import { View, Text } from 'react-native'
import React from 'react'

import ProfileHeader from '../ProfileHeader';
import ProfileBio from '../ProfileBio';

import styles from './styles';

const ProfileScreenHeader = ({ bannerImgUri, user }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileHeaderContainer}>
        <ProfileHeader
          bannerImgUri={bannerImgUri}
          profileImgUri={user?.image}
          userName={user?.name}
        />
      </View>
      <View style={styles.profileBioContainer}>
        <ProfileBio />
      </View>
    </View>
  )
}

export default ProfileScreenHeader;