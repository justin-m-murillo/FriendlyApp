import { View, Text, FlatList } from 'react-native'
import React from 'react';
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
  FontAwesome
} from "@expo/vector-icons";

import styles from './styles';

const ProfileBio = () => {
  const iconSize = 24;
  const iconColor = 'gray';

  const icons = [
    {
      id: "clockcircle",
      icon: <AntDesign name="clockcircle" size={20} color={iconColor} />,
      details: 'Join Date'
    },
    {
      id: "map-marker",
      icon: <FontAwesome name="map-marker" size={24} color={iconColor} />,
      details: 'Location'
    },
    {
      id: "graduation-cap",
      icon: <Entypo name="graduation-cap" size={24} color={iconColor} />,
      details: 'Education'
    },
    {
      id: "briefcase",
      icon: <MaterialCommunityIcons name="briefcase" size={22} color={iconColor} />,
      details: 'Occupation'
    },
  ];

  const BioEntry = ({ Icon, details }) => {
    return (
      <View style={styles.entryContainer}>
        <View style={styles.iconContainer}>
          {Icon}
        </View>
        <Text style={styles.entryText}>{details}</Text>
      </View>
    )
  }

  return (
    <View style={styles.bioContainer}>
      <FlatList 
        data={icons}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <BioEntry Icon={item.icon} details={item.details} />
        )}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  )
}

export default ProfileBio