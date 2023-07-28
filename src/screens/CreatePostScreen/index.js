import { 
  View, 
  Text, 
  Image, 
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

import KeyboardAvoidView from '../../components/KeyboardAvoidView';
import DismissKeyboard from '../../components/DismissKeyboard';
import ImagePickerBtn from '../../components/ImagePickerBtn';
import FormBtn from '../../components/FormBtn';
import styles from './styles';

import { DataStore, Auth } from 'aws-amplify';
import { Storage } from '@aws-amplify/storage';
import { Post } from '../../models';
import useFetchUser from '../../hooks/useFetchUser';
import ProfileImg from '../../components/ProfileImg';

// const user = {
//   id: "u1",
//   image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
//   name: "Vadim Savin",
// };

const CreatePostScreen = () => {
  const [ userData, setUserData ] = useState(null); 
  const [ description, setDescription ] = useState('');
  const [ image, setImage ] = useState(null);
  const navigation = useNavigation();
  const visitUserProfile = () => { navigation.navigate('Profile'); }

  const { user, isLoading } = useFetchUser();

  useEffect(() => {
    setUserData(user);
  }, [user, isLoading]);

  const onSubmit = async () => {
    const newPost = {
      description: description,
      numberOfLikes: 0,
      numberOfShares: 0,
      postUserId: userData.id,
      _version: 1, 
    };

    if (image) {
      newPost.image = await uploadFile(image);
    }

    await DataStore.save(new Post(newPost));

    setDescription('');
    setImage(null);
    navigation.navigate('Feed');
  }

  const uploadFile = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${uuidv4()}.png`;
      await Storage.put(key, blob, {
        contentType: "image/png", // contentType is optional
      });
      return key;
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  }
  
  return (
    <>
      {!isLoading &&
        <KeyboardAvoidView>
          <DismissKeyboard>
            <View style={{ flex: 1 }}>
              <View style={styles.header}>
                <TouchableOpacity onPress={visitUserProfile}>
                  <ProfileImg imgKey={userData.image} style={styles.profileImage} />
                </TouchableOpacity>
                <Text style={styles.name}>{userData.name}</Text>
                <View style={styles.imagePickerContainer}>
                  <ImagePickerBtn setImage={setImage} />
                </View>
              </View>
              <TextInput
                placeholder='What is on your mind?'
                multiline
                value={description}
                onChangeText={setDescription}
              />
              {image && <Image source={{ uri: image }} style={styles.image} />}
              <FormBtn 
                btnLabel={'POST'}
                disableCondition={!description}
                onSubmit={onSubmit}
              />
            </View>
          </DismissKeyboard>
        </KeyboardAvoidView>
      }
    </>
  )
}

export default CreatePostScreen;