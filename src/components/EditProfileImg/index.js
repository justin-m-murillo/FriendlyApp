import { View, Image } from 'react-native';
import ImagePickerBtn from '../../components/ImagePickerBtn';
import ProfileImg from '../ProfileImg';

import styles from './styles';

const EditProfileImg = ({ userProfileImg, pickedProfileImg, setPickedProfileImg }) => {

  let renderProfileImg = pickedProfileImg 
    ? <Image source={{ uri: pickedProfileImg }} style={styles.profileImg} />
    : <ProfileImg imgKey={userProfileImg} style={styles.profileImg} />;
  
  return (
    <View style={styles.profileImgContainer}>
      {renderProfileImg}
      <ImagePickerBtn setImage={setPickedProfileImg} btnText={'Change photo'} />
    </View>
  )
}

export default EditProfileImg;