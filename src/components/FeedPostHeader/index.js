import { View, Text, Image } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

const FeedPostHeader = ({ image, name, createdAt }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: image }}
        style={styles.profileImage} 
      />
      <View>
        <Text style={styles.name}>{name}</Text>
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