import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import styles from './styles'
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const ButtonRow = () => {
  const [ isLiked, setIsLiked ] = useState(false);

  return (
    <View style={styles.buttonsRow}>
      <TouchableOpacity 
        style={styles.iconButton}
        onPress={() => setIsLiked(!isLiked)}
      >
        <AntDesign
          name='like2' 
          size={18} 
          color={isLiked ? 'royalblue' : 'gray'} 
        />
        <Text 
          style={[
            styles.iconButtonText, 
            {color: isLiked ? 'royalblue' : 'gray'}
          ]}
        >
          {isLiked ? 'Unlike' : 'Like'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome5 
          name='comment-alt' 
          size={18} 
          color='gray'
        />
        <Text style={styles.iconButtonText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons 
          name='share-outline' 
          size={18} 
          color='gray'
        />
        <Text style={styles.iconButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonRow;