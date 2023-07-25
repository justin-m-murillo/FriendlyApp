import { 
  View, 
  Text, 
  Image, 
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

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

  const onSubmit = () => {
    console.warn({description});
    setDescription('');

    navigation.goBack();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      console.log('res',result.assets[0]['uri'])
      setImage(result.assets[0]);
    }
  };
  
  return (
    <KeyboardAvoidView>
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Image source={{ uri: user.image }} style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <ImagePickerBtn setImage={setImage} />
          </View>
          <TextInput
            placeholder='What is on your mind?'
            multiline
            value={description}
            onChangeText={setDescription}
          />
          {image && <Image source={{ uri: image['uri'] }} style={styles.image} />}
          <FormBtn 
            btnLabel={'POST'}
            btnStyle={styles.btn}
            btnTextStyle={styles.btnText}
            disabledCondition={!description}
            onSubmit={onSubmit}
          />
        </View>
      </DismissKeyboard>
    </KeyboardAvoidView>
  )
}

export default CreatePostScreen;