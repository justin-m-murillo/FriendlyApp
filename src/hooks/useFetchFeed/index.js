import { useState, useEffect } from 'react';

import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Post } from '../../models'

/**
 * Get all posts in DataStore
 * 
 * @returns Array of Post entries in DataStore
 */
const useFetchFeed = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const subscription = DataStore.observeQuery(Post, Predicates.ALL, {
      sort: (p) => p.createdAt(SortDirection.DESCENDING),
    }).subscribe(({ items }) => setPosts(items));
    setIsLoading(false);
    return () => subscription.unsubscribe();
  }, []);

  return { posts, isLoading };
}

export default useFetchFeed;