import { 
  View, 
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

import KeyboardAvoidView from '../../components/KeyboardAvoidView';

import styles from './styles';

const UpdateProfileScreen = () => {
  const [ userName, setUserName ] = useState('');
  const [ profileImg, setProfileImg ] = useState(null);

  const dummy_img = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <KeyboardAvoidView>

      </KeyboardAvoidView>
    </TouchableWithoutFeedback>
  )
}

export default UpdateProfileScreen