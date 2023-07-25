import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const FormBtn = ({ 
  btnLabel, 
  btnStyle,
  btnTextStyle,
  disableCondition,
  onSubmit,
}) => {
  return (
    <TouchableOpacity
      disabled={disableCondition}
      onPress={onSubmit}
      style={[styles.btnDefault, btnStyle, disableCondition ? {opacity: 0.5} : null]} 
    >
      <Text style={[
        styles.textDefault,
        btnTextStyle, 
        {color: disableCondition ? 'lightgray' : 'white'}
      ]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  )
}

export default FormBtn;