import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const IconBtn = ({ 
  btnIcon,
  btnColor, 
  btnText,
  btnTextStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: btnColor,
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16 
      }}
      onPress={onPress}
    >
      {btnIcon && 
        <View style={{ marginHorizontal: 2 }}>
          {btnIcon}
        </View>
      }
      {btnText && 
        <Text style={
          [{ marginHorizontal: 2 }, btnTextStyle]
        }>
          {btnText}
        </Text>
      }
    </TouchableOpacity>
  )
}

export default IconBtn