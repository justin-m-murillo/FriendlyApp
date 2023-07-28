import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './styles'

const EditProfileName = ({ userName, setUserName }) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput 
        value={userName}
        onChangeText={setUserName}
        placeholder={'Full name'}
        style={styles.textInputStyle}
      />
    </View>
  )
}

export default EditProfileName;