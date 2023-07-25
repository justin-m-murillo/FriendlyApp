import { View, Image, FlatList } from "react-native";
import styles from "./styles";

const ImageCarousel = ({ images }) => {
  return (
    <View>
      <FlatList 
        data={images}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <Image 
            style={ styles.image }
            source={{ uri: item }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ImageCarousel;