import { View, Text, Image } from 'react-native';
import React from 'react';
import LikeImage from '../../../assets/images/like.png';
import styles from './styles';

const StatsRow = ({ numberOfLikes, numberOfShares }) => {
  return (
    <View style={styles.statsRow}>
      <Image source={LikeImage} style={styles.likeIcon} />
      <Text style={styles.likedBy}>
        Elon Musk and {numberOfLikes} others
      </Text>
      <Text style={styles.shares}>
        {numberOfShares} shares
      </Text>
    </View>
  );
}

export default StatsRow;