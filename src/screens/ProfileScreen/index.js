import { View, Text, FlatList, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import { DataStore, Auth } from 'aws-amplify';
import { User, Post } from '../../models';

import ProfileScreenHeader from '../../components/ProfileScreenHeader';

import FeedPost from '../../components/FeedPost';

import styles from './styles';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchPosts from '../../hooks/useFetchPosts';

const bg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";

const ProfileScreen = () => {
  const [ user, setUser ] = useState(null);
  const [ posts, setPosts ] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  // console.log('Route Params:', route?.params?.id);

  const { user: dbUser, isLoading: userLoading } = useFetchUser(route?.params?.id);
  const { posts: dbPosts, isLoading: postsLoading } = useFetchPosts(dbUser?.id)
  
  useEffect(() => {
    setUser(dbUser);
    setPosts(dbPosts);
    // console.log('User Object:', dbUser);
    // console.log('Posts Array:', dbPosts);
  }, [
    dbUser, 
    userLoading, 
    dbPosts, 
    postsLoading
  ]);

  return (
    <>
      {!userLoading && !postsLoading && 
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FeedPost post={item} />
          )}
          ListHeaderComponent={() => (
            <>
              <ProfileScreenHeader bannerImgUri={bg} user={user}/>
              <View style={styles.postsLabelContainer}>
                <Text style={styles.postsLabelText}>Posts</Text>
              </View>
            </>
          )}
          contentContainerStyle={styles.rootContainer}
        />
      }
    </>
  )
}

export default ProfileScreen;