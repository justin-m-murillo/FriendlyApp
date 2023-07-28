import { View, } from 'react-native';
import { useState, useEffect } from 'react';

import FeedPostHeader from '../FeedPostHeader';
import FeedPostBody from '../FeedPostBody';
import FeedPostFooter from '../FeedPostFooter';

import { DataStore } from 'aws-amplify';
import { User } from '../../models';

import styles from './styles';

const FeedPost = ({ 
  post: {
    createdAt, description,
    image, numberOfLikes, numberOfShares, postUserId,
  }
}) => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    DataStore.query(User, postUserId).then(setUser);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* Header */}
        <FeedPostHeader
          id={postUserId} 
          image={user?.image}
          name={user?.name}
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