import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

import ProfileScreenHeader from '../../components/ProfileScreenHeader';

import user from '../../../assets/data/user.json';
import FeedPost from '../../components/FeedPost';

import styles from './styles';

const dummy_img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";
const bg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";

const ProfileScreen = () => {
  return (
    <FlatList 
      data={user.posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <FeedPost post={item} />
      )}
      ListHeaderComponent={() => (
        <>
          <ProfileScreenHeader bannerImgUri={bg} user={user} />
          <View style={styles.postsLabelContainer}>
            <Text style={styles.postsLabelText}>Posts</Text>
          </View>
        </>
      )}
      contentContainerStyle={styles.rootContainer}
    />
  )
}

export default ProfileScreen;