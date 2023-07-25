import { Image, Text } from 'react-native'
import React from 'react';
import styles from './styles';

const FeedPostBody = ({ description, image }) => {
  return (
    <>
      {description && 
          <Text style={styles.description}>{description}</Text>
      }
      {image && 
        <Image source={{ uri: image }} style={styles.image} />
      }
    </>
  )
}

export default FeedPostBody