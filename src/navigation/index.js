import { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import FeedScreen from '../screens/FeedScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import useFetchUser from '../hooks/useFetchUser';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { user, isLoading } = useFetchUser();

  return (
    <>
      {!isLoading &&
        <NavigationContainer>
          <Stack.Navigator
            key={user}
            initialRouteName={!user ? 'Edit Profile' : 'Feed'}
          >
            <Stack.Screen 
              name='Feed'
              component={FeedScreen}
            />
            <Stack.Screen
              name='Create Post'
              component={CreatePostScreen}
            />
            <Stack.Screen
              name='Profile'
              component={ProfileScreen}
            />
            <Stack.Screen
              name='Edit Profile'
              component={EditProfileScreen}
            />
          </Stack.Navigator>
      </NavigationContainer>
      }
    </>
  )
}

export default Navigator