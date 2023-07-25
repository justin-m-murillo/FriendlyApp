import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      { children }
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard;