import { View, } from 'react-native';
import { useState } from 'react';

import FeedPostHeader from '../FeedPostHeader';
import FeedPostBody from '../FeedPostBody';
import FeedPostFooter from '../FeedPostFooter';

import styles from './styles';

const FeedPost = ({ 
  post: {
    createdAt, description,
    image, numberOfLikes, numberOfShares,
    User,
  }
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* Header */}
        <FeedPostHeader 
          image={User.image}
          name={User.name}
          createdAt={createdAt}
        />
        {/* Body */}
        <FeedPostBody
          description={description}
          image={image}
        />
        {/* Footer */}
        <FeedPostFooter 
          numberOfLikes={numberOfLikes}
          numberOfShares={numberOfShares}
        />
      </View>
    </View>
  );
}

export default FeedPost;