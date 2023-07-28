import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import ProfileImg from '../ProfileImg';

import styles from './styles';

const FeedPostHeader = ({ id, image, name, createdAt }) => {
  const navigation = useNavigation();
  const visitUserProfile = () => {
    navigation.navigate('Profile', {
      id: id,
    })
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={visitUserProfile}>
        <ProfileImg imgKey={image} style={styles.profileImage} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={visitUserProfile}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>{createdAt}</Text>
      </View>
      <Entypo 
        name='dots-three-horizontal' 
        size={18} color='gray' 
        style={styles.icon} 
      />
    </View>
  )
}

export default FeedPostHeader;