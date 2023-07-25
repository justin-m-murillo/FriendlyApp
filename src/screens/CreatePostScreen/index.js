import { 
  View, 
  Text, 
  Image, 
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import KeyboardAvoidView from '../../components/KeyboardAvoidView';
import DismissKeyboard from '../../components/DismissKeyboard';
import ImagePickerBtn from '../../components/ImagePickerBtn';
import FormBtn from '../../components/FormBtn';
import styles from './styles';

const user = {
  id: "u1",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const [ description, setDescription ] = useState('');
  const [ image, setImage ] = useState(null);

  const navigation = useNavigation();

  const visitUserProfile = () => {
    navigation.navigate('Profile');
  }

  const onSubmit = () => {
    console.warn({description});
    setDescription('');

    navigation.goBack();
  }
  
  return (
    <KeyboardAvoidView>
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={visitUserProfile}>
              <Image source={{ uri: user.image }} style={styles.profileImage} />
            </TouchableOpacity>
            <Text style={styles.name}>{user.name}</Text>
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
  )
}

export default CreatePostScreen;