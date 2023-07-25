import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FormBtn = ({ 
  btnLabel, 
  btnStyle, 
  btnTextStyle, 
  disabledCondition,
  onSubmit,
}) => {
  return (
    <TouchableOpacity
      disabled={disabledCondition} 
      onPress={onSubmit}
      style={[btnStyle, disabledCondition ? {opacity: 0.5} : null]} 
    >
      <Text style={[
        btnTextStyle, 
        {color: disabledCondition ? 'lightgray' : 'white'}
      ]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  )
}

export default FormBtn;