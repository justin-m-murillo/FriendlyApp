import { Text } from 'react-native'
import React from 'react';
import { S3Image } from '../../awsHelpers';

import styles from './styles';

const FeedPostBody = ({ description, image }) => {
  return (
    <>
      {description && 
        <Text style={styles.description}>{description}</Text>
      }
      {image && 
        <S3Image imgKey={image} style={styles.image} />
      }
    </>
  )
}

export default FeedPostBody