import { 
  View, 
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import KeyboardAvoidView from '../../components/KeyboardAvoidView';
import DismissKeyboard from '../../components/DismissKeyboard';

import useFetchUser from '../../hooks/useFetchUser';
import { awsUploadImage } from '../../awsHelpers';

import { DataStore, Auth, API, graphqlOperation } from 'aws-amplify';
import { User } from '../../models';

import styles from './styles';
import FormBtn from '../../components/FormBtn';
import EditProfileImg from '../../components/EditProfileImg';
import EditProfileName from '../../components/EditProfileName';

const EditProfileScreen = () => {
  const [ userName, setUserName ] = useState('');
  const [ userProfileImg, setUserProfileImg ] = useState(null);
  const [ pickedProfileImg, setPickedProfileImg ] = useState(null);

  const navigation = useNavigation();

  const { user } = useFetchUser();
  
  useEffect(() => {
    setUserName(user?.name);
    setUserProfileImg(user?.image);
  }, [user]);

  const onSave = async () => {
    if (user) {
      console.log('Updating user profile');
      await onUpdate();
    } else {
      console.log('Creating user profile');
      await onCreate();
    }

    setUserName('');
    setPickedProfileImg(null);
    navigation.navigate('Feed');
  }

  const onUpdate = async () => {
    let imgKey = '';
    if (pickedProfileImg) imgKey = await awsUploadImage(pickedProfileImg);

    await DataStore.save(User.copyOf(user, (update) => {
      update.name = userName;
      if (imgKey) {
        update.image = imgKey;
      }
    }))
  }

  const onCreate = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    //console.log('User ID:', userData.attributes.sub, 'Name:', userName);

    const newUser = {
      authUserId: userData.attributes.sub,
      name: userName,
    }

    if (pickedProfileImg) newUser.image = await awsUploadImage(pickedProfileImg);

    await DataStore.save(
      new User(newUser)
    );
  }

  return (
    <KeyboardAvoidView>
      <DismissKeyboard>
        <View style={styles.rootContainer}>
          <View style={styles.infoContainer}>
            <EditProfileImg 
              userProfileImg={userProfileImg}
              pickedProfileImg={pickedProfileImg}
              setPickedProfileImg={setPickedProfileImg} 
            />
            <EditProfileName 
              userName={userName} 
              setUserName={setUserName}
            />
          </View>
          <FormBtn
            btnLabel={'SAVE'}
            btnTextStyle={styles.updateBtnText}
            onSubmit={onSave}
          />
        </View>
      </DismissKeyboard>
    </KeyboardAvoidView>
  )
}

export default EditProfileScreen