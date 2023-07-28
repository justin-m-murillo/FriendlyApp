import { useState, useEffect } from 'react';

import { Auth, DataStore } from 'aws-amplify';
import { User } from '../../models';

/**
 * Fetches current user if id parameter is left blank or
 * another user in database if id is provided. Checks if a User model
 * in DataStore exists for that user. 
 * Returns undefined if a User model is not found.
 * 
 * @returns {{ user: object, isLoading: boolean }}
 */
const useFetchUser = (id = '') => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        console.log('Fetching current user');
        const dbUser = await Auth.currentAuthenticatedUser();
        const thisUser = await DataStore.query(User, (u) => u.authUserId.eq(dbUser.attributes.sub));
        setUser(thisUser.length == 0 ? null : thisUser[0]);
      } else {
        console.log('Fetching queried user');
        await DataStore.query(User, id).then(setUser);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, [id]);

  return { user, isLoading }
}

export default useFetchUser;