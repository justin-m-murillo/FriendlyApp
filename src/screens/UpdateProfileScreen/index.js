import { 
  View, 
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';

const UpdateProfileScreen = () => {
  const [ userName, setUserName ] = useState('');
  const [ profileImg, setProfileImg ] = useState(null);

  const dummy_img = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

  return (
    <KeyboardAvoidingView
      style={[
        styles.rootContainer,
      ]}
    >
      <Text>UpdateProfileScreen</Text>
    </KeyboardAvoidingView>
  )
}

export default UpdateProfileScreen