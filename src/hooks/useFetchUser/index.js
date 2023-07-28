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
      let subscription;
      if (!id) {
        console.log('Fetching current user');
        const dbUser = await Auth.currentAuthenticatedUser();
        id = dbUser.attributes.sub;
      } else {
        console.log('Fetching queried user');
      }
      subscription = DataStore.observeQuery(
        User, u => u.authUserId.eq( id ))
          .subscribe(({ items }) => items.length == 1 
            ? setUser(items[0]) 
            : setUser(null)
      );
      setIsLoading(false);
      return subscription;
    }

    const subscription = fetchUser();
    return () => subscription.unsubscribe();
  }, [id]);

  return { user, isLoading }
}

export default useFetchUser;