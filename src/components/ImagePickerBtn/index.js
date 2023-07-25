import { View, Text } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'

// setImage: provide function to receive image selected
const ImagePickerBtn = ({ setImage }) => {
  
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
    <Entypo
      onPress={pickImage}
      name="images"
      size={24}
      color="limegreen"
      style={styles.icon}
    />
  )
}

export default ImagePickerBtn