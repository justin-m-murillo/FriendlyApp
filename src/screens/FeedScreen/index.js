import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import FeedPost from '../../components/FeedPost';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

import useFetchFeed from '../../hooks/useFetchFeed';

const FeedScreen = () => {
  const [ posts, setPosts ] = useState([]);

  const navigation = useNavigation();
  const { posts: dbPosts, isLoading } = useFetchFeed();

  useEffect(() => {
    setPosts(dbPosts);
  }, [dbPosts, isLoading]);

  const visitUserProfile = () => navigation.navigate('Profile');
  const createPost = () => navigation.navigate('Create Post');

  return (
    <>
      {!isLoading &&
        <View style={{ flexGrow: 1 }}>
          <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <FeedPost post={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View
                onPress={createPost}
                style={styles.header}
              >
                <TouchableOpacity
                  style={styles.addPost}
                  onPress={createPost}
                >
                  <MaterialCommunityIcons name="chat-plus-outline" size={24} color="gray" />
                  <Text style={styles.addPostLabel}>What's on your mind?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.visitProfileIcon}
                  onPress={visitUserProfile}
                  hitSlop={15}
                >
                  <FontAwesome name="user-circle" size={24} color="dodgerblue" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      }
    </>
  )
}

export default FeedScreen;