import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'

// setImage: provide function to receive image selected
const ImagePickerBtn = ({ setImage, btnText = null }) => {
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      console.log('res',result.assets[0]['uri']);
      setImage(result.assets[0]['uri']);
    }
  };

  return (
    <TouchableOpacity 
      onPress={pickImage}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <Entypo
        name="images"
        size={24}
        color="limegreen"
      />
        {btnText && <Text style={styles.btnText}>{btnText}</Text>}
    </TouchableOpacity>
  )
}

export default ImagePickerBtn