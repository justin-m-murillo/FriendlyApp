import { View, Text } from 'react-native'
import React from 'react'
import StatsRow from '../StatsRow';
import ButtonRow from '../ButtonRow';
import styles from './styles';


const FeedPostFooter = ({ numberOfLikes, numberOfShares }) => {
  return (
    <View style={styles.footer}>
    {/* Stats Row */}
    <StatsRow 
      numberOfLikes={numberOfLikes}
      numberOfShares={numberOfShares}
    />
    {/* Button Row */}
    <ButtonRow />
  </View>
  )
}

export default FeedPostFooter;