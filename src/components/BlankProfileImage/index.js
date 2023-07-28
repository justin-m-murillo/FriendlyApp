import { Image } from 'react-native'
import React from 'react'

const BlankProfileImg = ({ style }) => {
  return (
    <Image
      source={require('../../assets/BlankProfileImg/blank-profile-img.png')}
      style={style}
    />
  )
}

export default BlankProfileImg;