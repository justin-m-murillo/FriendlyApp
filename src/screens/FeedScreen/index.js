import { 
  View, 
  Text,
  FlatList,
  Image,
  TouchableOpacity  
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeedPost from '../../components/FeedPost';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import posts from '../../../assets/data/posts.json';

const img = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const FeedScreen = () => {
  const navigation = useNavigation();

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
          <TouchableOpacity
            onPress={createPost}
          >
            <Image source={{ uri: img }} style={styles.profileImage} />
            <Text style={styles.name}>What's on your mind?</Text>
            <Entypo 
              name='images'
              size={24}
              color='limegreen'
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default FeedScreen;