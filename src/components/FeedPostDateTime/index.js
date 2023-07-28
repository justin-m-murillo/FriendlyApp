import { View, Text } from 'react-native'
import React from 'react'
import { DateTime } from 'luxon'

/**
 * Receives date and time string in ISO format and converts it to
 * readible format (Month (abbr), Day, Year)
 * 
 * @returns {React.JSX.Element}
 */
const FeedPostDateTime = ({ dateTime, style }) => {
  const newDateTime = DateTime.fromISO(dateTime).toFormat('DD');
  return (
    <Text style={style}>
      {newDateTime}
    </Text>
  )
}

export default FeedPostDateTime;