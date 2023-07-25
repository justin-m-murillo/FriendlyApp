import { 
  View, 
  Text,
  FlatList,
  Image,
  TouchableOpacity  
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeedPost from '../../components/FeedPost';
import { AntDesign, Entypo, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import posts from '../../../assets/data/posts.json';

const img = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const FeedScreen = () => {
  const navigation = useNavigation();

  const visitUserProfile = () => {
    navigation.navigate('Profile');
  }

  const createPost = () => {
    navigation.navigate('Create Post');
  };

  return (
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
  )
}

export default FeedScreen;