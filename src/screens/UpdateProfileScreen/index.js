import { 
  View, 
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native'
import { useState } from 'react'

import KeyboardAvoidView from '../../components/KeyboardAvoidView';
import DismissKeyboard from '../../components/DismissKeyboard';
import ImagePickerBtn from '../../components/ImagePickerBtn';

import styles from './styles';
import FormBtn from '../../components/FormBtn';

const dummy_img = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const UpdateProfileScreen = () => {
  const [ userName, setUserName ] = useState('');
  const [ profileImg, setProfileImg ] = useState(null);

  const onDone = () => {
    console.warn('Finished Updating');
  }

  return (
    <KeyboardAvoidView>
      <DismissKeyboard>
        <View style={styles.rootContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.profileImgContainer}>
              <Image source={{ uri: profileImg ? profileImg : dummy_img }} style={styles.profileImg} />
              <ImagePickerBtn setImage={setProfileImg} btnText={'Change photo'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput 
                value={userName}
                onChangeText={setUserName}
                placeholder={'Full name'}
                style={styles.textInputStyle}
              />
            </View>
          </View>
          <FormBtn
            btnLabel={'SAVE'}
            btnTextStyle={styles.updateBtnText}
            onSubmit={onDone}
          />
        </View>
      </DismissKeyboard>
    </KeyboardAvoidView>
  )
}

export default UpdateProfileScreen