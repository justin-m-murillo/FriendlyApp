import { KeyboardAvoidingView } from 'react-native'
import React from 'react'
import * as Device from 'expo-device';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';

const KeyboardAvoidView = ({ children }) => {
  const inset = useSafeAreaInsets();
  const androidInset = 10;
  return (
    <KeyboardAvoidingView
      style={[
        styles.rootContainer,
        { marginBottom: Device.brand === 'Apple' ? inset.bottom : androidInset, }
      ]}
      behavior={Device.brand === 'Apple' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidView;