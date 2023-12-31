import { KeyboardAvoidingView } from 'react-native'
import React from 'react'
import * as Device from 'expo-device';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements'

import styles from './styles';

const KeyboardAvoidView = ({ children }) => {
  const inset = useSafeAreaInsets();
  const height = useHeaderHeight();
  const marginBottom = Device.brand === 'Apple' ? inset.bottom : 10;
  const behavior = Device.brand === 'Apple' ? 'padding' : 'height';
  const verticalOffset = height + 10;

  return (
    <KeyboardAvoidingView
      style={[
        styles.rootContainer,
        { marginBottom: marginBottom, }
      ]}
      behavior={behavior}
      keyboardVerticalOffset={verticalOffset}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidView;